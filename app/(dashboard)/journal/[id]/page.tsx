<<<<<<< HEAD
import Editor from '@/components/Editor'
import { getUserByClerkID } from '@/utils/auth'
import { prisma } from '@/utils/db'

const getEntry = async (id: any) => {
  const user = await getUserByClerkID()
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
    include: {
      analysis: true,
    },
  })

  return entry
}

const JournalEditorPage = async ({ params }:{params:any}) => {
  const entry = await getEntry(params.id)

  return (
    <div className="w-full h-full">
      <Editor entry={entry} />
    </div>
  )
}

export default JournalEditorPage
=======
// import Editor from '@/components/Editor'
// import { getUserFromClerkID } from '@/util/auth'
// import { prisma } from '@/util/db'

// const getEntry = async (id) => {
//   const user = await getUserFromClerkID()
//   const entry = await prisma.journalEntry.findUnique({
//     where: {
//       userId_id: {
//         userId: user.id,
//         id,
//       },
//     },
//     include: {
//       analysis: true,
//     },
//   })

//   return entry
// }

// const JournalEditorPage = async ({ params }) => {
//   const entry = await getEntry(params.id)

//   return (
//     <div className="w-full h-full">
//       <Editor entry={entry} />
//     </div>
//   )
// }

// export default JournalEditorPage
>>>>>>> 3407ea4 (initialize app and add auth)
