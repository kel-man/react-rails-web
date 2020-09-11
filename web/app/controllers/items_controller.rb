class ItemsController < ApplicationController

  def create
    @item = Item.create(item_params)
    render('show')
  end

  def update
    @item = Item.find(params[:id])
    @item.update(item_params)
    render('show')
  end

  def show
    @item = Item.find(params[:id])
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
  end

  def index
    @items = Item.all
  end

  private
  def item_params
    params.require(:item).permit(:topic, :contents)
  end
end
