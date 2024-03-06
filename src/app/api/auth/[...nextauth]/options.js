import GitHubProvider from "next-auth/providers/github"

export const options = {
  providers: [
    GitHubProvider({
      profile(profile){
        let userRole = 'GitHub user'
        if(profile?.email == "anthony.b.chung@gmail.com"){
          userRole = 'admin'
        }
        
        return {
          ...profile,
          role: userRole
        }
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  callbacks:{
    async jwt({token,user}){
      if(user) token.role = user.role
      return token
    },
    async session({token,user}){
      if(session?.user) session.user.role = token.role
      return session
    }
}
}