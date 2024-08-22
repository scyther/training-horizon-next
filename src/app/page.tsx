import Topbar from '@/Components/trainer-dashboard/Topbar'
import Teacher from '@/Components/trainer-dashboard/Teacher'
import { RatingsIcon, RankingIcon, BatchesIcon, LanguagesIcon, ChatIcon } from './icons/icon';

export default function Home() {
  const cardData1 = [
    { icon: <RatingsIcon />, title: 'Ratings', description: '4.5/5' },
    { icon: <RankingIcon />, title: 'Teacher Ranking', description: '10' },
    { icon: <BatchesIcon />, title: 'Batches Scheduled', description: '112' },
    { icon: <LanguagesIcon />, title: 'Languages', description: '2' },
  ];
  const cardData2 = [
    { icon: <RatingsIcon />, title: 'Ratings', description: '4.5/5' },
    { icon: <RankingIcon />, title: 'Teacher Ranking', description: '10' },
    { icon: <BatchesIcon />, title: 'Batches Scheduled', description: '112' },
    { icon: <ChatIcon/>, title: 'Chat with us for any query.', description: 'Assistance' },
  ];

  const about = `I am a scientist with a strong passion for teaching with 15 years of teaching experience. Received a Doctorate in Physics from a reputable university in the United States and I am currently residing in Toronto providing private and group lessons for middle school, high school, and college students.`;
  const workHistory = `• 2017 to 2018 Postdoctoral Research Fellow Medical College of Wisconsin – Milwaukee, WI
• Conducted experimental and computational research on an MR-Linac medical linear accelerator to pinpoint the instrument design effect on the dose distribution
• Took part in experiments to identify the effects of the source-to-axis distance difference between an MR-Linac and a conventional Linac
• Generated 3D and IMRT dose plans with Monaco workstation
• Received machine quality assurance and safety training on conventional Linacs
• Calibrated and operated radiation detection instruments
• Authored professional scientific papers for publishing in peer-reviewed journals
• Explored data to discover patterns, meaningful relationships, anomalies, and trends
• Gained knowledge of radiation safety procedures, standards
• 2010 to 2017 Research & Teaching Assistant Temple University – Philadelphia, PA, USA
• Designed and carried out laser spectroscopy experiments such as optical-optical double resonance and Autler-Townes splitting experiments.
• Gained extensive experience in operating, and troubleshooting various types of lasers such as tunable single longitudinal mode ring dye and Ti: Sapphire lasers, and their Diode, Argon-Ion pump lasers, Fourier Transform Interferometer (FTIR), and double grating spectrometer (SPEX 1404).`;

const education = `• MSc in Medical Biophysics (Clinical Medical Biophysics Master’s - CAMPEP Stream) - The University of Western Ontario, London, ON, Canada\n
• Ph.D. in Physics - Temple University, Philadelphia, PA, USA\n`

const publication = `• Chen, X., Paulson, E. S., Ahunbay, E., Sanli, A., Klawikowski, S., & Li, X. A. (2019). Measurement validation of treatment planning for an MR‐Linac. Journal of Applied Clinical Medical Physics, 20, 28-38 (2019)`;

    return (
      <>
        <Topbar />
        <Teacher
          name="Ryan Doblen"
          email="RyanDoblen@gmail.com"
          mobileNo="992394239"
          teacherId="873"
          location="Chicago, United States"
          imageUrl="https://s3-alpha-sig.figma.com/img/585d/480b/d17905db359f8c711418f17390b80b9e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0PJZJ1I8gsbKT8vHX3okXNc6aijt0wvIZ0a1ekO2fnrkbEL5aeXjkJXSG6HlfiaHOjJXWCnV7uf4VboKFZGh2iQrl~wZ~hYg5IRKJO0ihQ3ypMYqeLtCYtYxfv2PvMA6WgS3jHkkIt5cdUlJfiTHjiTzXKFEQ1wZDa5qn2Gfj6WC68kHzknDDkQemigrfMCUkTXeBIESUxUopevjjqWVGFcQEx-xadRhDLFHzCxppLBCjWbpk342-3TF4~lgePPBa67-nbERZ5iLIL6u00uXlmG9U36K1aAG7zXp-yAh0HL90DQJ6M2n2Ce8GXJ6dSh20Tuz5WfULw3NH3w-6TQZg__"
          about={about}
          workHistory={workHistory}
          education={education}
          publication={publication}
          cardData={cardData1}
          linkedin="Dylan1432"
        />
      </>
    );

}
