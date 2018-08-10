import delay from './delay';

let posts = [
  {
    id: 'Sy8gauutz',
    content: "Maya T., Graphics: Design and style is what makes a client fall initially in love with a product. I'm here to help you find the design that feels good to you and reflects a message you want. Date Posted: 03/02/18"
  },
  {
    id: 'BJJ76_OtG',
    content:   "Chris D., 3D Architectural Rendering Designer: I am a modernistic 3D Architectural Rendering Designer who has both a Interior Design Technology A.S. degree and a Technical Certificate in Kitchen and Bath Design. I mainly work with SketchUp and SU Podium but have advanced knowledge in AutoCAD, Adobe Photoshop, Adobe Lightroom. Date Posted: 02/14/18"
  },
  {
    id: 'BkPXadutz',
    content: "Emily P., E-Commerce UI/UX: My aim is to create long-lasting professional relationships with my clients where I can help them see their success through. I love getting on routine calls and discussing client goals and throwing out ideas. I have never failed to over-deliver on a project and I have always helped my clients achieve successes. Posted: 02/13/18"
  }
];

class ForumApi {
  
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }


  static savePost(post) {
    post = Object.assign({}, post); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minPostLength = 1;
        if (post.content.length < minPostLength) {
          reject(`Forum post must be at least ${minPostLength} characters.`);
        } else {
          posts.push(post);
        }
        resolve(post);
      }, delay);
    });
  }

}

export default ForumApi;