json.blogComments @comments do |comment|
  json.id comment.id
  json.comment comment.comment
  json.timestamp comment.created_at
  json.owner comment.user.username
end
