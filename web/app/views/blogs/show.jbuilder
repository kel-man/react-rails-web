json.id @blog.id
json.title @blog.title
json.contents @blog.contents
if @editable
  json.editable @editable
end
json.timestamp @blog.created_at
