require 'rails_helper'

describe 'ProfilesController', type: :request do
  let(:user) {User.create!({
    email: 'admin@admin.com',
    password: 'password',
    role: 'admin',
  }) }
  let(:userprofile) {Profile.create!({
    user_id: user.id,
  }) }
  let(:confirmation) { get "/users/confirmation?confirmation_token=#{user.confirmation_token}" }

  before do
    user
    userprofile
    confirmation
    sign_in(user)
  end

  describe 'update' do
    let(:avatar) {fixture_file_upload("#{Rails.root}/spec/fixtures/images/example.png", 'image/png')}
    let(:request) { patch "/profiles/#{userprofile.id}", params: {
        avatar: avatar,
    } }
    it 'posts an image to a profile record' do
      # expect(userprofile.avatar).to_not be_attached
      # request
      # expect(userprofile.reload.avatar).to be_attached
      expect{request}.to change{ActiveStorage::Attachment.count}.by(1)
    end

    context 'user wishes to change username' do
      let(:request) { patch "/profiles/#{userprofile.id}", params: {
        username: 'new username',
      } }
      let(:expected_response) { {
        'username' => 'new username',
      } }
      it 'changes the username by patching profiles' do
        request
        expect(JSON.parse(response.body)).to include expected_response
      end
    end
  end
end
