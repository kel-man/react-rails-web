json.id @blog.id
json.title @blog.title
json.contents @blog.contents
if @editable
  json.editable @editable
end
json.timestamp @blog.updated_at.iso8601
json.owner @blog.user.username
if @blog.user.profile.avatar.attached?
  json.avatarURL url_for(@blog.user.profile.avatar)
end
json.quill @quill
