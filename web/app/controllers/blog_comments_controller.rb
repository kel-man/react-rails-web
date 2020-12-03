class BlogCommentsController < ApplicationController
  before_action :authenticate_user!

  def create
    @comment = BlogComment.create(blog_comment_params.merge({user_id: current_user.id}))
    render('show')
  end

  def update
    @comment = BlogComment.find_by({id: params[:id], user_id: current_user.id, })
    if @comment
      @comment.update(blog_comment_params)
      render('show')
    else
      head 404
    end
  end

  def show
    @comment = BlogComment.find_by({ id: params[:id] })
    if @comment
      @editable = current_user.role == 'admin' || @comment.user_id == current_user.id
    else
      head 404
    end
  end

  def destroy
    @comment = BlogComment.find_by({id: params[:id], user_id: current_user.id, })
    if @comment
      @comment.destroy
    else
      head 404
    end
  end

  def index
    @comments = BlogComment.where({blog_id: params[:blog_id]})
    head 404 unless @comments
  end

  private
  def blog_comment_params
    params.require(:blog_comment).permit(:comment, :blog_id)
  end
end
