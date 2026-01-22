export default function TraditionalUGPG() {
  const programs = [
    {
      level: "UG",
      title: "Undergraduate Programs",
      categories: [
        {
          name: "Arts",
          courses: [
            "BA - English",
            "BA - Bengali",
            "BA - Hindi",
            "BA - Political Science",
            "BA - History",
            "BA - Education",
            "BA - Philosophy",
            "BA - Sociology",
            "BA - Psychology",
            "BA - Physical Education",
            "BA - Fine Arts",
            "BA - Music",
            "BA - Drawing",
            "BA - Performing Arts",
            "BA - Acting",
            "BA - Yoga",
            "BA - Sports",
            "BA - Home Science",
          ],
        },
        {
          name: "Science",
          courses: [
            "BSc - Physics",
            "BSc - Chemistry",
            "BSc - Mathematics",
            "BSc - Zoology",
            "BSc - Botany",
            "BSc - EVS",
            "BSc - Microbiology",
            "BSc - Bio Technology",
            "BSc - Fashion",
            "BSc - Jwellary",
            "BSc - Interior",
            "BSc - Textile",
            "BSc - Fire & Safety",
            "BSc - Industrial Safety",
            "BSc - Agriculture",
            "BSc - Horticulture",
            "BSc - Food & Nutrition",
            "BSc - Hotel Management",
            "BSc - Botany",
          ],
        },
        {
          name: "BSc Paramedical",
          courses: [
            "BSc - Clinical Psychology",
            "BSc - Nutrition",
            "BSc - Hospital Management",
            "BSc - Medical Lab Technology",
            "BSc - Radiology",
            "BSc - OT Technology",
            "BSc - Dialysis Technology",
            "BSc - Physiotherapy",
            "BSc - Optometry",
            "BSc - MPH",
            "BSc - BNYS",
            "BSc - Yoga",
            "BSc - CMS & ED",
          ],
        },
        {
          name: "Commerce",
          courses: ["BCom"],
        },
        {
          name: "Management & Services",
          courses: [
            "BBA",
            "Aviation",
            "Cruise",
            "Hospitality",
            "Hotel",
            "Travel & Tourism",
            "Retail ",
            "Agro Farm ",
            "Banking ",
            "E-Commerce ",
            "Marketing ",
            "HR ",
            "Finance ",
            "Project ",
            "Supply Chain ",
            "Quality ",
            "Rural ",
            "Production ",
            "Dairy ",
            "IT ",
            "Insurance ",
          ],
        },
        {
          name: "Engineering - B.Tech",
          courses: [
            "Diploma Engineering",
            "Civil Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Electronics Engineering",
            "Computer Science Engineering",
            "Automobile Engineering",
            "Biotechnology",
            "Instrumentation Engineering",
            "Chemical Engineering",
            "Mining Engineering",
            "Agricultural Engineering",
            "Artificial Intelligence",
          ],
        },
        {
          name: "Computer Applications",
          courses: ["BCA"],
        },
        {
          name: "Social Work",
          courses: ["BSW"],
        },
        {
          name: "Library & Information Science",
          courses: ["BLIS"],
        },
      ],
    },
    {
      level: "PG",
      title: "Postgraduate Programs",
      categories: [
        {
          name: "Arts",
          courses: [
            "MA - English",
            "MA - Bengali",
            "MA - Hindi",
            "MA - Political Science",
            "MA - History",
            "MA - Education",
            "MA - Philosophy",
            "MA - Sociology",
            "MA - Psychology",
            "MA - Physical Education",
            "MA - Fine Arts",
            "MA - Music",
            "MA - Drawing",
            "MA - Performing Arts",
            "MA - Acting",
            "MA - Yoga",
            "MA - Sports",
            "MA - Home Science",
          ],
        },
        {
          name: "Science",
          courses: [
            "MSc - Physics",
            "MSc - Chemistry",
            "MSc - Mathematics",
            "MSc - Zoology",
            "MSc - Botany",
            "MSc - EVS",
            "MSc - Microbiology",
            "MSc - Bio Technology",
            "MSc - Fashion",
            "MSc - Jwellary",
            "MSc - Interior",
            "MSc - Textile",
            "MSc - Fire & Safety",
            "MSc - Industrial Safety",
            "MSc - Agriculture",
            "MSc - Horticulture",
            "MSc - Food & Nutrition",
            "MSc - Hotel Management",
            "MSc - Botany",
          ],
        },
        {
          name: "MSc Paramedical",
          courses: [
            "MSc - Clinical Psychology",
            "MSc - Nutrition",
            "MSc - Hospital Management",
            "MSc - Medical Lab Technology",
            "MSc - Radiology",
            "MSc - OT Technology",
            "MSc - Dialysis Technology",
            "MSc - Physiotherapy",
            "MSc - Optometry",
            "MSc - MPH",
            "MSc - BNYS",
            "MSc - Yoga",
            "MSc - CMS & ED",
          ],
        },
        {
          name: "Commerce",
          courses: ["MCom"],
        },
        {
          name: "Management & Services",
          courses: [
            "BBA",
            "Aviation",
            "Cruise",
            "Hospitality",
            "Hotel",
            "Travel & Tourism",
            "Retail ",
            "Agro Farm ",
            "Banking ",
            "E-Commerce ",
            "Marketing ",
            "HR ",
            "Finance ",
            "Project ",
            "Supply Chain ",
            "Quality ",
            "Rural ",
            "Production ",
            "Dairy ",
            "IT ",
            "Insurance ",
          ],
        },
        {
          name: "Engineering - M.Tech",
          courses: [
            "Diploma Engineering",
            "Civil Engineering",
            "Mechanical Engineering",
            "Electrical Engineering",
            "Electronics Engineering",
            "Computer Science Engineering",
            "Automobile Engineering",
            "Biotechnology",
            "Instrumentation Engineering",
            "Chemical Engineering",
            "Mining Engineering",
            "Agricultural Engineering",
            "Artificial Intelligence",
          ],
        },
        {
          name: "Management",
          courses: ["MBA", "PGDM"],
        },
        {
          name: "Computer Applications",
          courses: ["MCA"],
        },
        {
          name: "Computer & IT",
          courses: ["PGDCA"],
        },
      ],
    },
  ];

  return (
    <section className="traditional-ugpg-section" id="traditionalugpg">
      <h2 className="section-heading">Traditional UG & PG Programs</h2>
      <p className="section-subtext">
        Recognized undergraduate and postgraduate degrees across Arts, Science,
        Commerce, and Professional domains
      </p>

      <div className="programs-wrapper">
        {programs.map((program, idx) => (
          <div className="program-block" key={idx}>
            <h3 className={`program-level ${program.level.toLowerCase()}`}>
              {program.level} Programs
            </h3>

            <div className="categories-wrapper">
              {program.categories.map((category, i) => (
                <div className="category-card" key={i}>
                  <h4>{category.name}</h4>
                  <div className="courses-grid">
                    {category.courses.map((course, j) => (
                      <div className="course-pill" key={j}>
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
