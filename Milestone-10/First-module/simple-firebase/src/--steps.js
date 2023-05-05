/* 
* -----------------Initial setup ----------------

* 1. visit : console.firebase.google.com
* 2. create project (skip google analytics)
* 3. Register app (create config)
* 4. install firebase
* 5. add config file in project
* 6. danger: do not publish or make firebase config to public by pushing those to github
* ----------------- Integration-----------

* 7. visit: got to docs > build > authentication > web > get started
* 8. export app from firebase.config.js file : export default app 
* 9. import getAuth form firebase/auth in Login . js file 
* 10. create const auth = getAuth(app)
* ---------------- Provider setup-----------------

* 11. import GoogleAuthProvider and create a new provider
* 12. use signInWithPopup and pass app and provider
* 13. activate sign in method ( google , twiter , facebook, github)
* 14. changes 127.0.0.1 to localhost

* ------More auth provider 
* 1. activate the auth provider (create app,provide redirect url , client secret)

*/