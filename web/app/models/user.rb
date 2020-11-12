class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :confirmable
  has_many :items
  has_many :blogs
  has_one_attached :image
  has_one :profile, dependent: :destroy

  after_create :initialize_user

  def initialize_user
    Profile.create({user_id: id})
    self.username = email
    save
  end
end
