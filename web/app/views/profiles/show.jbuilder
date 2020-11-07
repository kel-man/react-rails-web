json.id @profile.id
if @profile.avatar.attached?
  json.avatarURL url_for(@profile.avatar)
end
json.user_id @profile.user_id
json.username @profile.user.username
json.bio @profile.bio
