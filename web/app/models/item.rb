class Item < ApplicationRecord
  validates :topic, :contents, presence: true
  belongs_to :user
end
