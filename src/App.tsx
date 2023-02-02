const [edwinPicURL, ruthPicURL, michellPicURL] = Object.values(
    import.meta.glob('./images/*.jpg', {
        as: 'url',
        eager: true
    })
)

/**
 * React applications are made out of components. A component is a piece
 * of the UI which has its own logic and appearance.
 */

import React from 'react'

/**
 * React components are JavaScript functions that return markup.
 */
function LikeButton() {
    return <button>Give A Like</button>
}

// JSX is a convenient XML-like syntax for creating components.
function NameInput() {
    const nameInputId = React.useId()

    return (
        <section>
            <label htmlFor={nameInputId}>Your name:</label>
            <br />
            <input
                type="text"
                id={nameInputId}
                placeholder="Your name"
                name="name"
            />
        </section>
    )
}

type IUser = {
    name: string
    pictureURL: string
}

function UserProfile({ data }: { data: IUser }) {
    return (
        <article>
            <header>
                <img
                    src={data.pictureURL}
                    alt={`${data.name} profile picture`}
                    width="400"
                    height="400"
                />
            </header>
            <div>
                <h2>{data.name}</h2>
            </div>
        </article>
    )
}

const users: IUser[] = [
    {
        name: 'Edwin',
        pictureURL: edwinPicURL
    },
    {
        name: 'Ruth',
        pictureURL: ruthPicURL
    },
    {
        name: 'Michel',
        pictureURL: michellPicURL
    }
]

export default function App() {
    const Tag = 'h3'

    return (
        <>
            <header>
                <a href="/">React Quickstart</a>
            </header>

            <main>
                <h1>Learning React</h1>

                <p>
                    Below there's an instance of the <code>LikeButton</code>{' '}
                    component.
                </p>

                <LikeButton />

                <p>
                    What about a component for entering your name (hopefully?).
                </p>

                <NameInput />

                <section>
                    <h2>
                        React declaractive way to embed JavaScript expressions
                        into your markup is pretty simple.
                    </h2>

                    <p>Let's show a list of user profiles.</p>

                    {users.map((user) => (
                        <UserProfile data={user} key={user.name} />
                    ))}
                </section>
            </main>
        </>
    )
}
