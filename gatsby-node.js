const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
 const { createPage } = actions

 const result = await graphql(
   `
     {
        allMicrocmsArticles {
         edges {
           node {
             id
             num
             title
             title_origin
             category {
                id
                name
             }
             body
             feature
             pict {
                 url
             }
           }
         }
       }
     }
   `
 )

 if (result.errors) {
   throw result.errors
 }

 result.data.allMicrocmsArticles.edges.forEach(edge => {
     //上記のGraphQLでcategoryを書いてないがnode.categoryを掴めるようだ
     const categoryName = edge.node.category[0].name
     switch (categoryName) {
         case 'patients':  // categoryがpatientsだったらサブパスをpatientsに
             subDir = '/patients-article/'+ edge.node.num
             break;
         case 'doctors':  // categoryがdoctorsだったらサブパスをdoctorsに
             subDir = '/doctors-article/'+edge.node.num
             break;
        case 'medias':  // categoryがdoctorsだったらサブパスをdoctorsに
             subDir = '/medias-article/'+edge.node.num
             break;        
         default:
             subDir = '/basics/'+edge.node.num
     }
   createPage({
     //path: `/patients/${edge.node.id}`,
     path: `${subDir}`,
     component: path.resolve(
       "./src/templates/article.js"
     ),
     context: {
       id: edge.node.id,
     },
   })

 })
}
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it