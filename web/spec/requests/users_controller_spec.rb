require 'rails_helper'

describe 'UsersController', type: :request do
  let(:user) {User.create!({
    email: 'user@user.com',
    password: 'password',
    role: 'guest',
    username: 'guesty',
  }) }
  let(:admin) {User.create!({
    email: 'admin@admin.com',
    password: 'password',
    role: 'admin',
    username: 'bigboss',
  }) }
  let(:userprofile) {Profile.create!({
    user_id: user.id,
  }) }

  before do
    admin
    sign_in(user)
    userprofile
  end

  describe 'update' do
    let(:request) { patch "/profiles#{userprofile.id}", params: {
      user: {
        username: 'new guest username',
      }
    } }
    let(:expected_response) { {
      loggedIn: true,
      username: 'new guest username',
    }.to_json }
    it 'changes the username of guest user' do
      request
      expect(response.body).to eq expected_response
    end
  end
end
