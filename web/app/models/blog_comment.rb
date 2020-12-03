class BlogComment < ApplicationRecord
  validates :comment, presence: true
  belongs_to :blog
  belongs_to :user

end
