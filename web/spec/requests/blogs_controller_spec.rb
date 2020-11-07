require 'rails_helper'

describe 'BlogsController', type: :request do
  let(:user) {User.create!({
    email: 'admin@admin.com',
    password: 'password',
    role: 'admin',
  }) }
  let(:user2) {User.create!({
    email: 'member@member.com',
    password: 'password',
    role: 'guest',
  }) }
  let(:blog1) {Blog.create!({
    user_id: user.id,
    title: 'Blog post title',
    contents: 'blog post contents'
  }) }
  let(:blog2) {Blog.create!({
    user_id: user.id,
    title: 'Second blog post title',
    contents: 'second blog post contents',
  }) }

  before do
    user2
    sign_in(user)
    blog1
    blog2
  end

  describe 'index' do
    let(:request) { get '/blogs' }
    let(:expected_response) { {
      blogs: [{
        id: blog1.id,
        title: blog1.title,
        contents: blog1.contents,
        timestamp: blog1.created_at,
      }, {
        id: blog2.id,
        title: blog2.title,
        contents: blog2.contents,
        timestamp: blog2.created_at,
        }]
    }.to_json }

    it 'returns a list of blog posts in JSON' do
      request
      expect(response.body).to eq (expected_response)
    end
  end

  describe 'create' do
    let(:blog_title) { 'blog title' }
    let(:blog_contents) { 'blog contents' }
    let(:request) { post '/blogs', params: {
      blog: {
        title: blog_title,
        contents: blog_contents,
    }
    } }
    let(:expected_response) { {
      'title' => blog_title,
      'contents' => blog_contents,
    } }
    it 'creates a blog post in the database with valid values' do
      expect{ request }.to change{ Blog.count }.by (1)
      expect(JSON.parse(response.body)).to include expected_response
    end
  end

  describe 'update' do
    let(:first_title) { 'Initial blog title' }
    let(:first_contents) { 'Initial blog contents' }
    let(:updated_title) { 'Updated Title' }
    let(:updated_contents) { 'Updated blog contents' }
    let(:request) { patch "/blogs/#{blog2.id}", params: {
      blog: {
        title: updated_title,
        contents: updated_contents,
      }
    } }
    let(:expected_response) { {
      id: blog2.id,
      title: updated_title,
      contents: updated_contents,
      timestamp: blog2.created_at,
    }.to_json }
    it 'edits the title and contents of blog2' do
      request
      expect(response.body).to eq expected_response
      expect(blog2.reload.title).to eq updated_title
    end
    context 'user is not admin' do
      let(:request) { patch "/blogs/#{blog2.id}", params: {
        blog: {
          title: updated_title,
          contents: updated_contents,
        }
      } }
      let(:user2) {User.create!({
        email: 'member@member.com',
        password: 'password',
        role: 'guest',
      }) }
      let(:expected_response_status) { 403 }
      before do
        sign_in(user2)
      end
      it 'returns 403 unauthorized' do
        request
        expect(response.status).to eq expected_response_status
      end
    end
  end

  describe 'show' do
    let(:request) { get "/blogs/#{blog2.id}" }
    let(:editable) { true }
    let(:expected_response) { {
      id: blog2.id,
      title: blog2.title,
      contents: blog2.contents,
      editable: editable,
      timestamp: blog2.created_at,
    }.to_json }
    it 'shows blog2 from the database' do
      request
      expect(response.body).to eq expected_response
    end
    context 'user did not create this blog and is not admin' do
      let(:expected_response) { {
        id: blog2.id,
        title: blog2.title,
        contents: blog2.contents,
        timestamp: blog2.created_at,
      }.to_json }
      before do
        sign_in user2
      end
      it 'blog is not editable' do
        request
        expect(response.body).to eq expected_response
      end
    end
    context 'user did create this blog or is admin' do
      let(:expected_response) { {
        id: blog2.id,
        title: blog2.title,
        contents: blog2.contents,
        editable: editable,
        timestamp: blog2.created_at,
      }.to_json }
      before do
        sign_in user
      end
      it 'blog is editable' do
        request
        expect(response.body).to eq expected_response
      end
    end
  end

  describe 'destroy' do
    let(:request) { delete "/blogs/#{blog2.id}" }
    let(:expected_response) { {
      blogs: [{
        id: blog1.id,
        title: blog1.title,
        contents: blog1.contents,
        timestamp: blog1.created_at,
      }]
    }.to_json }
    it 'destroys blog2 from the database' do
      expect{ request }.to change{ Blog.count }.by ( -1 )
      expect(response.status).to eq 204
      get '/blogs'
      expect(response.body).to eq expected_response
    end
  end
end
