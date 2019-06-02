import React from 'react'
import Card from './Card'
import Login from './Login'
import User from './User'
import Profile from './Profile'

const Sidebar = () => {
    return (
        <div>
            <Card>
                <User>
                    {({ data }) => {
                        if (data.me) {
                            return <Profile />
                        }

                        return <Login />
                    }}
                </User>
            </Card>
        </div>
    )
}

export default Sidebar
