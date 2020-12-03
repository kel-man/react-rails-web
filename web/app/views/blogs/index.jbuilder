json.blogs @blogs do |blog|
  json.id blog.id
  json.title blog.title
  json.contents blog.contents
  json.timestamp blog.created_at
  json.owner blog.user.username
end
