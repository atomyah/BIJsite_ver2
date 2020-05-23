import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { NavDropdown } from 'react-bootstrap'

const HeaderDoctors = () => (
    <StaticQuery
        query={graphql`
            query headerMenuDoctorsQuery {
                allHeaderMenuDoctorsJson
                (filter: {category: {eq: "doctors"}}) 
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
                    {getHeaderMenuDoctors(data)}
        </NavDropdown.Item>
        </>
        )}
    />
)

function getHeaderMenuDoctors(data) {
    const HeaderMenuDoctorsArray = [];
    data.allHeaderMenuDoctorsJson.edges.forEach(item =>
      HeaderMenuDoctorsArray.push(
        <Link to={item.node.link} className="nav-link">
          {item.node.title}
        </Link>
        )
    );
    return HeaderMenuDoctorsArray;
}

export default HeaderDoctors


