json.id @blog.id
json.title @blog.title
json.contents @blog.contents
if @editable
  json.editable @editable
end
json.timestamp @blog.created_at
json.owner @blog.user.username
if @blog.user.profile.avatar.attached?
  json.avatarURL url_for(@blog.user.profile.avatar)
end
