import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPostgresAdapter } from '@prisma/adapter-ppg'
import bcrypt from 'bcryptjs'

const adapter = new PrismaPostgresAdapter({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  const passwordHash = await bcrypt.hash('Demo@123', 12)

  // Create Advisor
  const advisor = await prisma.user.upsert({
    where: { phone: '9999999901' },
    update: {},
    create: {
      name: 'Demo Advisor',
      phone: '9999999901',
      email: 'advisor@legadv.com',
      passwordHash,
      role: 'ADVISOR',
      isActive: true,
    },
  })
  console.log('Created Advisor:', advisor.phone)

  // Create Assistant
  const assistant = await prisma.user.upsert({
    where: { phone: '9999999902' },
    update: {},
    create: {
      name: 'Demo Assistant',
      phone: '9999999902',
      email: 'assistant@legadv.com',
      passwordHash,
      role: 'ASSISTANT',
      isActive: true,
    },
  })
  console.log('Created Assistant:', assistant.phone)

  // Create Client
  const client = await prisma.user.upsert({
    where: { phone: '9999999903' },
    update: {},
    create: {
      name: 'Demo Client',
      phone: '9999999903',
      email: 'client@legadv.com',
      passwordHash,
      role: 'CLIENT',
      isActive: true,
    },
  })
  console.log('Created Client:', client.phone)

  console.log('\n✅ Seed completed!')
  console.log('\nDefault credentials for all roles:')
  console.log('Password: Demo@123')
  console.log('\nAdvisor:   9999999901')
  console.log('Assistant: 9999999902')
  console.log('Client:    9999999903')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
