import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media.licdn.com/dms/image/D4D03AQHyfefsMittaw/profile-displayphoto-shrink_100_100/0/1699214059872?e=1709769600&v=beta&t=8TeWhpZOtBpVu31PvXI94QovIkesWHcGHrkgHSPu0Wo" />
                <Dropdown pointing="top right" text="Mehmet">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out" />
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
