import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFile } from 'fs/promises';

// Import all data sources
import { MOCK_CONSULTANTS } from './src/data/consultants.ts';
import { MOCK_DESTINATIONS } from './src/data/destinations.ts';
import { MOCK_LODGES } from './src/data/lodges.ts';
import { MOCK_REVIEWS } from './src/data/reviews.ts';
import { SAFARI_CIRCUITS } from './src/data/safariCircuit.ts';
import { TRANSPORT_COSTS, FLIGHT_OPERATORS, FLIGHT_COSTS } from './src/data/transport.ts';

// --- Main Seeding Function ---
async function seedDatabase() {
  // 1. Initialize Firebase Admin
  // Ensure the service account key is in the root directory
  const serviceAccount = JSON.parse(
    await readFile(new URL('./serviceAccountKey.json', import.meta.url))
  );

  initializeApp({
    credential: cert(serviceAccount)
  });

  const db = getFirestore();
  console.log('Firebase Admin Initialized...');

  // 2. Define collections and the data they will hold
  const collectionsToSeed = {
    consultants: MOCK_CONSULTANTS,
    destinations: MOCK_DESTINATIONS,
    lodges: MOCK_LODGES,
    reviews: MOCK_REVIEWS,
    safariCircuits: SAFARI_CIRCUITS,
    transportCosts: TRANSPORT_COSTS,
    flightOperators: FLIGHT_OPERATORS,
    flightCosts: FLIGHT_COSTS
  };

  // 3. Loop through and upload each collection
  for (const [collectionName, data] of Object.entries(collectionsToSeed)) {
    console.log(`Checking collection: ${collectionName}...`);
    const collectionRef = db.collection(collectionName);
    const snapshot = await collectionRef.limit(1).get();

    if (snapshot.empty) {
      console.log(`Seeding ${data.length} documents into ${collectionName}...`);
      const batch = db.batch();
      data.forEach(item => {
        // Use the item's own ID if it exists, otherwise let Firestore generate one
        const docRef = item.id ? collectionRef.doc(item.id) : collectionRef.doc();
        batch.set(docRef, item);
      });
      await batch.commit();
      console.log(`✅ Collection ${collectionName} seeded successfully.`);
    } else {
      console.log(`⚠️ Collection ${collectionName} already contains data. Skipping.`);
    }
  }

  console.log('\nDatabase seeding process complete.');
}

seedDatabase().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1); 
});
