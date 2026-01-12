
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFile } from 'fs/promises';

// Import all data sources
import { MOCK_CONSULTANTS } from './src/data/consultants.js';
import { DESTINATIONS, SAFARI_CIRCUIT_SUGGESTIONS } from './src/data/destinations.js';
import { MOCK_REVIEWS } from './src/data/reviews.js';
import { TRANSPORT_COSTS, FLIGHT_OPERATORS, FLIGHT_COSTS } from './src/data/transport.js';

// --- Main Seeding Function ---
async function seedDatabase() {
  // 1. Initialize Firebase Admin
  const serviceAccount = JSON.parse(
    await readFile(new URL('./serviceAccountKey.json', import.meta.url))
  );

  initializeApp({
    credential: cert(serviceAccount)
  });

  const db = getFirestore();
  console.log('Firebase Admin Initialized...');

  // 2. Define data to seed
  // Arrays of documents for standard collections
  const collectionsToSeed = {
    consultants: MOCK_CONSULTANTS,
    destinations: DESTINATIONS,
    reviews: MOCK_REVIEWS,
    flightOperators: FLIGHT_OPERATORS,
    flightCosts: FLIGHT_COSTS,
  };

  // Single objects to be stored as individual documents in a 'configs' collection
  const singleDocumentsToSeed = {
    configs: { // A new collection for all single-object configurations
        transportCosts: TRANSPORT_COSTS,
        safariCircuitSuggestions: SAFARI_CIRCUIT_SUGGESTIONS,
    }
  };

  // 3. Seed collections from arrays
  for (const [collectionName, data] of Object.entries(collectionsToSeed)) {
    console.log(`Checking collection: ${collectionName}...`);
    const collectionRef = db.collection(collectionName);
    const snapshot = await collectionRef.limit(1).get();

    if (snapshot.empty) {
      console.log(`Seeding ${data.length} documents into ${collectionName}...`);
      const batch = db.batch();
      data.forEach(item => {
        const docRef = item.id ? collectionRef.doc(item.id) : collectionRef.doc();
        batch.set(docRef, item);
      });
      await batch.commit();
      console.log(`✅ Collection ${collectionName} seeded successfully.`);
    } else {
      console.log(`⚠️ Collection ${collectionName} already contains data. Skipping.`);
    }
  }

  // 4. Seed single documents from objects into the 'configs' collection
  for (const [collectionName, docs] of Object.entries(singleDocumentsToSeed)) {
    console.log(`Checking collection: ${collectionName}...`);
    const collectionRef = db.collection(collectionName);
    
    for (const [docId, data] of Object.entries(docs)) {
        const docRef = collectionRef.doc(docId);
        const docSnapshot = await docRef.get();
        if (!docSnapshot.exists) {
            console.log(`Seeding document '${docId}' into collection '${collectionName}'...`);
            await docRef.set(data);
            console.log(`✅ Document '${docId}' seeded successfully.`);
        } else {
            console.log(`⚠️ Document '${docId}' in collection '${collectionName}' already exists. Skipping.`);
        }
    }
  }

  console.log('\nDatabase seeding process complete.');
}

seedDatabase().catch(error => {
  console.error('Error seeding database:', error);
  process.exit(1);
});
