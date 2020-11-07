class ImagesController < ApplicationController
  before_action :authenticate_user!

  def create
    @image = Image.create(image_params.merge({user_id: current_user.id}))
    render('show')
  end

  def update
    @image = Image.find_by({id: params[:id], user_id: current_user.id,})
    head 404 unless @image
  end

  def show
    @image = Image.find_by({id: params[:id], })
    head 404 unless @image
  end

  def destroy
    @image = Image.find_by({id: params[:id], user_id: current_user.id, })
    if @image
      @image.destroy
    else
      head 404
    end
  end

  def index
    @images = Image.all
  end

  private
  def image_params
    params.require(:image)
  end
end
