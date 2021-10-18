/* eslint-env node */
class parseProfile {
  constructor(response){
    this.setProfile(response);
  }
  setProfile(response) {
    this.avatar_url = response.data.user.avatarUrl;
    this.name = response.data.user.name;
    this.username = response.data.user.login,
    this.bio = response.data.user.bio,
    this.website = response.data.user.websiteUrl,
    this.email = response.data.user.email,
    this.repositories = response.data.user.repositories.totalCount,
    this.followers = response.data.user.followers.totalCount,
    this.following = response.data.user.following.totalCount,
    this.created_at = response.data.user.createdAt
  }
}
exports.parseProfile = parseProfile;
			

			