class ApplicationController < ActionController::Base
  respond_to :json
  protect_from_forgery with: :exception

  def hello
    render html: "hello, world!"
  end
end
