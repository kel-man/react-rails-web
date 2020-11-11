require 'rails_helper'

describe 'ConfirmationsController', type: :request do
  describe 'Redirect after confirmation' do
    let(:user) {User.create!({
      email: 'user@user.com',
      password: 'password',
      role: 'guest',
    }) }

    let(:request) { get "/users/confirmation?confirmation_token=#{user.confirmation_token}" }

    before do
      user
    end

    it 'redirects the webpage after hitting confirmation token' do
      expect(request).to redirect_to('/_/checklist')
    end
  end
end
