class Blog < ApplicationRecord
  validates :title, :contents, presence: true
  belongs_to :user
end
