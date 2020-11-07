class ItemsController < ApplicationController
  before_action :authenticate_user!

  def create
    @item = Item.create(item_params.merge({user_id: current_user.id}))
    render('show')
  end

  def update
    @item = Item.find_by({id: params[:id], user_id: current_user.id,})
    if @item
      @item.update(item_params)
      render('show')
    else
      head 404
    end
  end

  def show
    @item = Item.find_by({id: params[:id], user_id: current_user.id,})
    head 404 unless @item
  end

  def destroy
    @item = Item.find_by({id: params[:id], user_id: current_user.id,})
    if @item
      @item.destroy
    else
      head 404
    end
  end

  def index
    @items = Item.where({user_id: current_user.id}).order(updated_at: :desc)
  end

  private
  def item_params
    params.require(:item).permit(:topic, :contents)
  end
end
