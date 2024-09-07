import React from 'react';

function JEENEET() {
  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-10">JEE & NEET Courses 2024-25</h1>

      {/* Course Information Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Offline Classroom Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">JEE-Main</h3>
            <p className="text-gray-600 mb-2">Course Fee: ₹1,995,630</p>
            <p className="text-gray-600">This course is designed to prepare students for JEE Main examination, covering all topics comprehensively.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">JEE-Main + Advanced</h3>
            <p className="text-gray-600 mb-2">Course Fee: ₹3,774,299</p>
            <p className="text-gray-600">An integrated course that prepares students for both JEE Main and Advanced exams, providing in-depth knowledge.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">NEET-UG</h3>
            <p className="text-gray-600 mb-2">Course Fee: ₹499,870</p>
            <p className="text-gray-600">Designed for students aiming for NEET-UG, this course focuses on all subjects needed for medical entrance exams.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Pre-Foundation (8th to 10th)</h3>
            <p className="text-gray-600">Prepares younger students for JEE and NEET by building a strong foundation in science and mathematics.</p>
          </div>
        </div>
      </section>

      {/* Live Online Courses Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Live Online Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">JEE-Main (Online)</h3>
            <p className="text-gray-600">Available for live online learning with expert guidance and flexibility.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">JEE-Main + Advanced (Online)</h3>
            <p className="text-gray-600 mb-2">Course Fee: ₹4,228,730</p>
            <p className="text-gray-600">A live online course for students preparing for both JEE Main and Advanced with comprehensive resources.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">NEET-UG (Online)</h3>
            <p className="text-gray-600 mb-2">Course Fee: ₹1,587,561</p>
            <p className="text-gray-600">Online NEET-UG course with interactive sessions and real-time problem solving.</p>
          </div>

          <div className="p-6 border rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Pre-Foundation (6th to 10th)</h3>
            <p className="text-gray-600">Live online classes for younger students building a strong foundation for JEE/NEET preparation.</p>
          </div>
        </div>
      </section>

      {/* Gurcharanam Advantages */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Gurcharanam Academy?</h2>
        <ul className="list-disc ml-6 mt-4">
          <li>Comprehensive Study Material with rich content to cover all subjects.</li>
          <li>Highly Qualified Faculty with decades of experience in teaching.</li>
          <li>Use of Advanced Technologies to provide quality education both offline and online.</li>
          <li>Regular Mock Tests and performance reviews to help students track their progress.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-4 mt-10 border-t">
        <p>© 2021 GURCHARANAM ACADEMY PRIVATE LIMITED, Kota (Rajasthan)</p>
        <p>
          CIN: U74999RJ2016PTC056403 | E-Mail: info@gurcharanamacademy.in | Helpline: +91 9588907110
        </p>
      </footer>
    </div>
  );
}

export default JEENEET;
