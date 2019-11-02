class StaticPagesController < ApplicationController
  def index
    render file: 'static/index.html'
  end

  def home
  end

  def about
  end

  def contact
  end

  def help
  end
end
