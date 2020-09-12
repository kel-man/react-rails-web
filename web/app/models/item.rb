class Item < ApplicationRecord
  validates :topic, :contents, presence: true
end
