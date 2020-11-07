class ProfilesController < ApplicationController
  class ImageTooLargeError < StandardError; end
  before_action :authenticate_user!
  def index
    @profiles = Profile.all
  end

  def show
    @profile = Profile.find_by({ user_id: current_user.id })
    head 404 unless @profile
  end

  def update
    @profile = Profile.find_by({id: params[:id], user_id: current_user.id, })
    if @profile
      if params[:avatar]
        if params[:avatar].size > 10.megabytes
          raise ImageTooLargeError.new("Image too large")
        end
        image = MiniMagick::Image.new(params[:avatar].tempfile.path)
        image = image.resize "256x256"
        @profile.avatar.attach(params[:avatar])
      end
      if params[:username]
        current_user.username = params[:username]
        current_user.save
      end
      render('show')
    else
      head 404
    end
  end

  def destroy
    @profile = Profile.find_by({id: params[:id], user_id: current_user.id, })
    if @profile
      @profile.destroy
    else
      head 404
    end
  end

  def create
    @profile = Profile.create(profile_params.merge({user_id: current_user.id}))
  end

  private
  def profile_params
    params.require(:profile).permit(:avatar)
  end
end
