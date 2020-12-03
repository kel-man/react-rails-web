class Blog < ApplicationRecord
  validates :title, :contents, presence: true
  belongs_to :user
  has_many :blog_comments, dependent: :destroy
end
