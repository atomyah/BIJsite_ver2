import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { NavDropdown } from 'react-bootstrap'

const HeaderMedias = () => (
    <StaticQuery
        query={graphql`
            query headerMenuMediasQuery {
                allHeaderMenuMediasJson
                (filter: {category: {eq: "medias"}}) 
                {
                    edges {
                        node {
                            title
                            link
                            category
                        }
                    }
                }
            }
        `}
        render={data => (
        <>
        <NavDropdown.Item className="nav-link">                                        
                    {getHeaderMenuMedias(data)}
        </NavDropdown.Item>
        </>
        )}
    />
)

function getHeaderMenuMedias(data) {
    const HeaderMenuMediasArray = [];
    data.allHeaderMenuMediasJson.edges.forEach(item =>
      HeaderMenuMediasArray.push(
        <Link to={item.node.link} className="nav-link">
          {item.node.title}
        </Link>
        )
    );
    return HeaderMenuMediasArray;
}

export default HeaderMedias


