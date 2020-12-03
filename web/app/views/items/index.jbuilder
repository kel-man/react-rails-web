json.items @items do |item|
  json.id item.id
  json.topic item.topic
  json.contents item.contents
  if item.updated_at
    json.updated_at item.updated_at.iso8601
  end
end
