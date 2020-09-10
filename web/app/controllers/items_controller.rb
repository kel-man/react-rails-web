class ItemsController < ApplicationController
  def index
    @items = Item.all
  end

  def create
    @item = Item.create(item_params)
    render('show')
  end


  private
  def item_params
    params.require(:item).permit(:topic, :contents)
  end
end
