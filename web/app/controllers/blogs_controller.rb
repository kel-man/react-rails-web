class BlogsController < ApplicationController
  before_action :authenticate_user!

  def create
    @blog = Blog.create(blog_params.merge({user_id: current_user.id}))
    render('show')
  end

  def update
    @blog = Blog.find_by({id: params[:id], user_id: current_user.id,})
    if @blog
      if current_user.role == "admin"
        @blog.update(blog_params)
        render('show')
      else
        head 404
      end
    else
      head 403
    end
  end

  def show
    @blog = Blog.find_by({id: params[:id], })
    @editable = current_user.role == 'admin' || current_user.id == @blog.user_id
    @quill = @blog.created_at > DateTime.strptime('2020-12-12', '%Y-%m-%d')
    head 404 unless @blog
  end

  def destroy
    @blog = Blog.find_by({id: params[:id], user_id: current_user.id,})
    if @blog
      @blog.destroy
    else
      head 404
    end
  end

  def index
    @blogs = Blog.all.order(updated_at: :desc)
  end

  private
  def blog_params
    params.require(:blog).permit(:title, :contents)
  end
end
