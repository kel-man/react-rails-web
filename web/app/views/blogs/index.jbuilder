json.blogs @blogs do |blog|
  json.id blog.id
  json.title blog.title
  json.contents blog.contents
  json.timestamp blog.updated_at.iso8601
  json.owner blog.user.username
end
