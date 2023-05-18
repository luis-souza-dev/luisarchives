import Post from '@/components/post';
import Image from 'next/image'

export default function Home() {
  const navigate = () => {
    console.log('hey');
  }
  const posts: any[] = JSON.parse(`
    [
      {
        "id": "e82a7d5d-2f3f-4c11-9e7f-0f9eef5e73b1",
        "createdAt": "2022-05-10T09:30:00Z",
        "updatedAt": "2022-05-15T15:45:00Z",
        "title": "Lorem ipsum dolor sit amet",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula ipsum et sem gravida, sed vestibulum lectus facilisis. Nulla facilisi. Proin iaculis convallis commodo.",
        "tags": ["lorem", "ipsum", "dummy"]
      },
      {
        "id": "0b6f06af-b5eb-415b-8261-2e6d77e6fcb9",
        "createdAt": "2022-06-02T14:20:00Z",
        "updatedAt": "2022-06-05T11:10:00Z",
        "title": "Dolor sit amet",
        "body": "Dolor sit amet, consectetur adipiscing elit. Etiam auctor orci ligula, sit amet cursus eros placerat non. Quisque fermentum eros nec mi laoreet, id commodo dolor posuere.",
        "tags": ["dolor", "sit", "amet"]
      },
      {
        "id": "a4c54e9d-bf0a-4c9d-8ef6-209f28600075",
        "createdAt": "2022-07-20T17:55:00Z",
        "updatedAt": "2022-07-25T09:25:00Z",
        "title": "Adipiscing elit",
        "body": "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "tags": ["adipiscing", "elit", "tempor"]
      },
      {
        "id": "4c76495c-76fb-4970-b7df-0cfe429c4e9a",
        "createdAt": "2022-08-12T08:40:00Z",
        "updatedAt": "2022-08-18T16:30:00Z",
        "title": "Lorem ipsum dolor",
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis, quam id commodo fermentum, diam mauris tempus nisl, ac eleifend nunc ligula nec tortor.",
        "tags": ["lorem", "ipsum", "dolor"]
      },
      {
        "id": "79c1e231-52d1-4e02-b234-8944ab3ef7a1",
        "createdAt": "2022-09-01T11:20:00Z",
        "updatedAt": "2022-09-05T14:15:00Z",
        "title": "Amet consectetur",
        "body": "Amet consectetur adipiscing elit. In hac habitasse platea dictumst. Sed commodo purus id elit vestibulum, ut rhoncus turpis vestibulum.",
        "tags": ["amet", "consectetur", "adipiscing"]
      },
      {
        "id": "c80b4af0-8438-46b5-94b6-14fb2a798f45",
        "createdAt": "2022-09-18T19:10:00Z",
        "updatedAt": "2022-09-22T12:55:00Z",
        "title": "Lorem ipsum sit amet",
        "body": "Lorem ipsum sit amet, consectetur adipiscing elit. Vestibulum ultricies viverra mauris, vel laoreet felis cursus nec. Donec vitae ante nec tellus rutrum varius.",
        "tags": ["lorem", "ipsum", "sit"]
      },
      {
        "id": "d152e647-9e5a-4e4b-8f63-ef29d6f0d05f",
        "createdAt": "2022-10-05T10:05:00Z",
        "updatedAt": "2022-10-10T17:20:00Z",
        "title": "Consectetur adipiscing",
        "body": "Consectetur adipiscing elit. Duis bibendum ex ut dolor maximus faucibus. Mauris pharetra elementum enim sed dignissim. Fusce volutpat velit vel tristique pulvinar.",
        "tags": ["consectetur", "adipiscing", "duis"]
      },
      {
        "id": "1c7b1867-36a3-46b3-a4c5-13f1c5a35f07",
        "createdAt": "2022-11-20T15:30:00Z",
        "updatedAt": "2022-11-25T08:10:00Z",
        "title": "Sit amet consectetur",
        "body": "Sit amet consectetur adipiscing elit. Vestibulum in ligula ipsum. Nulla facilisi. Vestibulum semper, quam sed fringilla scelerisque, dui justo consectetur felis, id fringilla erat leo a est.",
        "tags": ["sit", "amet", "consectetur"]
      },
      {
        "id": "f1b3a16c-7ad2-4787-9bc9-836b88d7d51e",
        "createdAt": "2022-12-07T09:50:00Z",
        "updatedAt": "2022-12-12T14:40:00Z",
        "title": "Ipsum dolor sit",
        "body": "Ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae efficitur urna. Morbi auctor consectetur facilisis. Nulla facilisi. Suspendisse vitae consequat risus.",
        "tags": ["ipsum", "dolor", "aliquam"]
      },
      {
        "id": "d7ee84a5-2d16-45ea-941e-217c7a992e34",
        "createdAt": "2023-01-15T16:20:00Z",
        "updatedAt": "2023-01-22T11:05:00Z",
        "title": "Elit sed do",
        "body": "Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "tags": ["elit", "sed", "tempor"]
      },
      {
        "id": "41db7fa9-8906-4ff6-95d4-4f9b33d848eb",
        "createdAt": "2023-02-03T12:40:00Z",
        "updatedAt": "2023-02-10T10:15:00Z",
        "title": "Vestibulum ultricies viverra",
        "body": "Vestibulum ultricies viverra mauris, vel laoreet felis cursus nec. Proin scelerisque dui ut tellus faucibus, at condimentum ipsum efficitur. Cras at velit lobortis, ultricies ex eu, fringilla est.",
        "tags": ["vestibulum", "ultricies", "mauris"]
      },
      {
        "id": "ab68de78-c671-41fd-9f72-0bcbf1959a69",
        "createdAt": "2023-03-18T18:15:00Z",
        "updatedAt": "2023-03-25T14:25:00Z",
        "title": "Lorem ipsum amet",
        "body": "Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur. Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur. Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur. Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur. Lorem ipsum amet consectetur adipiscing elit. Donec at varius neque. Morbi sed scelerisque est, vel hendrerit nisl. Phasellus sed purus a arcu venenatis consectetur.",
        "tags": ["lorem", "ipsum", "donec"]
      },
      {
        "id": "5f3b172f-cf76-4e44-81fd-628cc06fe7e3",
        "createdAt": "2023-04-07T10:55:00Z",
        "updatedAt": "2023-04-13T13:40:00Z",
        "title": "Amet consectetur adipiscing",
        "body": "Amet consectetur adipiscing elit. Sed fermentum, erat non facilisis condimentum, neque turpis interdum sapien, et aliquam purus lectus eu neque.",
        "tags": ["amet", "consectetur", "sed"]
      },
      {
        "id": "c1a3c7b1-ef3f-4e94-8aa0-c8ab2008c8eb",
        "createdAt": "2023-05-01T14:30:00Z",
        "updatedAt": "2023-05-07T09:20:00Z",
        "title": "Dolor sit amet consectetur",
        "body": "Dolor sit amet consectetur adipiscing elit. Sed tristique lacus vel tempus rutrum. Integer suscipit lacus felis, at lacinia ligula ultrices in.",
        "tags": ["dolor", "sit", "amet"]
      },
      {
        "id": "0b6b8557-bcd2-4413-a226-cb3aeb307d55",
        "createdAt": "2023-05-17T11:40:00Z",
        "updatedAt": "2023-05-20T16:15:00Z",
        "title": "Elit sed do eiusmod",
        "body": "Elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "tags": ["elit", "sed", "tempor"]
      }
    ]`);
  return (
    <div className='flex flex-wrap gap-y-4 pt-10 pb-4'>
      {posts.map(post => (
        <Post key={post.id} title={post.title} description={post.body} date={post.createdAt} tags={post.tags} id={post.id}/>
      ))}
    </div>
  )
}
