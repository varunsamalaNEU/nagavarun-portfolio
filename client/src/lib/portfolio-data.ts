export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  image?: string;
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  technologies: string[];
  highlights?: string[];
  image?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  graduationDate: string;
  gpa?: string;
  coursework?: string[];
}

export const education: Education[] = [
  {
    degree: "Master of Science in Robotics, Electronics and Computer Engineering",
    school: "Northeastern University",
    location: "Boston, MA",
    graduationDate: "Dec 2025",
    gpa: "3.8",
    coursework: [
      "Algorithms",
      "Control Systems",
      "Autonomous Field Robotics",
      "Sensor Fusion",
      "Computer Vision",
      "Legged Robotics",
      "Advanced Computer Vision",
    ],
  },
  {
    degree: "Bachelor of Technology in Mechanical Engineering",
    school: "Chaitanya Bharathi Institute of Technology",
    location: "India",
    graduationDate: "Jul 2023",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Tools",
    skills: [
      "C++",
      "Python",
      "MATLAB",
      "OpenCV",
      "Eigen",
      "GTSAM",
      "PCL",
      "Open3D",
      "Git",
      "Docker",
      "WandB",
      "NumPy",
      "FilterPy",
      "Matplotlib",
    ],
  },
  {
    name: "Software & Frameworks",
    skills: [
      "ROS",
      "ROS2",
      "Simulink",
      "Gazebo",
      "MuJoCo",
      "Isaac Sim",
      "TensorFlow",
      "PyTorch",
      "Keras",
      "ONNX",
      "TensorRT",
      "SolidWorks",
      "3D Printing",
    ],
  },
];

export const experience: Experience[] = [
  {
    title: "Research Assistant",
    company: "Silicon Synapse Robotics Lab",
    location: "Boston, MA",
    startDate: "Nov 2023",
    endDate: "Present",
    image: "/experiences/silicon-synapse.jpg",
    description: [
      "Implemented end-to-end autonomous navigation system for M4 robot using ROS2, integrating elevation mapping with 2.5D costmap generation and custom Nav2 plugins for path planning, achieving robust indoor navigation with dynamic obstacle avoidance in hospital simulation",
      "Developed behavior tree system for autonomous waypoint navigation with custom action nodes for path planning and obstacle avoidance",
      "Drafted Error-State Kalman Filter for a bipedal robot, combining IMU and Mocap data to estimate robot pose for integration with ZMP controllers",
      "Developed Capture Point-based ZMP controller to dynamically regulate foot placement for balance recovery, achieving stable bipedal standing",
      "Worked on developing state estimation for foot position in a biped robot using EKF and OptiTrack, enhancing motion accuracy and stability",
      "Established communication pipeline connecting STM32, VectorNav IMU, and ESP32 systems, performing joint tests initialization in Elmo Studio and generating TwinCAT ENI files to ensure hardware-software compatibility",
      "Drafted Transformation code for Multi modal morphing robot using Dynamixel-sdk and integrated it with ROS nodes for joint state publishing",
    ],
  },
  {
    title: "Bio-Medical Engineering Co-op",
    company: "MethodAI",
    location: "Boston, MA",
    startDate: "Jan 2025",
    endDate: "Jun 2025",
    image: "/experiences/methodai.jpg",
    description: [
      "Developed and automated systematic single element testing to validate transducer performance and verify tumor alignment using tumor phantom",
      "Built MATLAB scripts for real-time RF data capture, histogram visualization, and beamformed image plotting to support transducer evaluation",
      "Developed MATLAB and Python scripts for real-time RF data capture, signal processing, and visualization including histograms, dB-scaled heatmaps and beamformed images to evaluate transducer array performance and identify underperforming probe elements",
      "Created analysis code to evaluate imaging system metrics including point-spread function, contrast resolution, and spatial fidelity",
      "Developed a real-time force visualization MATLAB app by integrating a Force sensor to capture and plot insertion forces during catheterization",
    ],
  },
  {
    title: "Robotics Engineer",
    company: "Kitolit Ltd",
    location: "Hyderabad, India",
    startDate: "Oct 2022",
    endDate: "Aug 2023",
    image: "/experiences/kitolit.jpg",
    description: [
      "Engineered embedded vision pipeline on Raspberry Pi processing distorted fisheye imagery through custom calibration matrix and lane detection algorithms, delivering steering commands at 30Hz for responsive vehicle control",
      "Implemented closed-loop control system translating detected lane boundaries into precise servo commands through custom control algorithm, demonstrating successful autonomous lane-following in various lighting conditions",
      "Engineered and deployed a self-driving RC car using ROS and LD19 lidar, creating a real-time 2D point cloud map with Hector SLAM for precise localization and navigation. Integrated MOVE Base for path planning, obstacle avoidance, target positioning",
      "Developed inverse kinematics solver for 12-DOF humanoid biped, implementing forward/inverse kinematic transformations and gait generation algorithms to achieve stable bipedal locomotion with custom walking patterns",
    ],
  },
  {
    title: "Chief, Electric Vehicle",
    company: "Praheti Racing Club",
    location: "Hyderabad, India",
    startDate: "Jan 2022",
    endDate: "Jun 2023",
    image: "/experiences/praheti.jpg",
    description: [
      "Led 8-member cross functional team to design EV-powertrain's LV & HV circuits and simulate Battery Management System",
      "Modelled Lithium-Ion battery functionality, in the range of 7KWh, 96 V, to analyze SOC, SOE, Voltage & Temperature",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Model Predictive Path Integral Control for Autonomous Vehicle Systems",
    period: "Mar 2025 – Sep 2025",
    image: "/projects/mppi-control.jpg",
    description: [
      "Implemented MPPI controller for vehicle path tracking with 50 rollouts per control step at 20Hz, with real time performance in CARLA",
      "Achieved mean tracking accuracy of 1.55m with consistent speed regulation between 20-35 km/h on tracks while minimizing path drift",
      "Designed and implemented advanced sampling-based optimization using Monte Carlo methods with adaptive noise injection and importance weighting, with aggressive cornering maneuvers at 35 km/h while maintaining stability through multi-objective cost function optimizations",
    ],
    technologies: ["CARLA", "Python", "MPPI", "Control Systems", "Monte Carlo"],
    highlights: ["1.55m tracking accuracy", "Real-time 20Hz performance", "Aggressive cornering stability"],
  },
  {
    title: "Autonomous Vehicle Path Planning with YOLO Detection and BEV Transformation",
    period: "2024",
    image: "/projects/av-path-planning.jpg",
    description: [
      "Developed autonomous vehicle path planning system integrating YOLO object detection, BEV transformation, and A* path-finding algorithm to enable real-time obstacle avoidance and navigation",
      "Built computer vision pipeline processing dashcam video with perspective transformation matrices and occupancy grid mapping, achieving accurate vehicle detection and spatial positioning for autonomous navigation applications",
      "Implemented real-time video processing system with OpenCV and Python, generating synchronized side-by-side visualization of camera feed and top-down BEV navigation view for autonomous driving research",
    ],
    technologies: ["YOLO", "OpenCV", "Python", "BEV", "A*", "Computer Vision"],
    highlights: ["Real-time processing", "Accurate vehicle detection", "BEV visualization"],
  },
  {
    title: "3D Scene Reconstruction using Neural Radiance Fields",
    period: "2024",
    image: "/projects/nerf-reconstruction.jpg",
    description: [
      "Developed a full PyTorch-based NeRF training pipeline, including ray sampling, positional encoding, hierarchical volume rendering, and loss optimization for high-quality novel view synthesis",
      "Optimized training with stratified sampling and hierarchical importance sampling, improving convergence speed and achieving PSNR 28.29",
    ],
    technologies: ["PyTorch", "NeRF", "Computer Vision", "3D Reconstruction"],
    highlights: ["PSNR 28.29", "Hierarchical importance sampling", "Novel view synthesis"],
  },
  {
    title: "Structure from Motion & GTSAM Optimization",
    period: "Sep 2023 – Dec 2023",
    image: "/projects/sfm-gtsam.jpg",
    description: [
      "Developed robust 3D reconstruction pipeline achieving sub-pixel accuracy through GTSAM bundle adjustment optimization, reducing reprojection error from 415,950 to 10.9 (97.4% improvement) across 3,334 landmarks and 23 camera poses",
      "Designed multi-camera pose estimation system using essential matrix decomposition and PnP algorithms, integrating RANSAC outlier rejection and cheirality constraints to ensure geometrically consistent 3D scene reconstruction",
      "Engineered factor graph optimization framework using GTSAM library, diagnosing and resolving numerical stability issues through noise model tuning and coordinating system validation",
    ],
    technologies: ["GTSAM", "Computer Vision", "3D Reconstruction", "Optimization"],
    highlights: ["97.4% error reduction", "Sub-pixel accuracy", "3,334 landmarks"],
  },
  {
    title: "Dynamic Gait Optimization and Energy Efficiency Enhancement in a 3-Link Biped",
    period: "Mar 2024 – Apr 2024",
    image: "/projects/biped-gait.jpg",
    description: [
      "Developed and implemented an Integrated Hybrid Zero Dynamics framework for a 3-link bipedal robot, optimizing kinematic and dynamic models to achieve energy-efficient locomotion",
      "Devised and implemented a novel gait stabilization framework leveraging Lagrangian dynamics and feedback control, resulting in a measurable 25% improvement in bipedal robot gait stability and energy efficiency across diverse terrains",
    ],
    technologies: ["Hybrid Zero Dynamics", "MATLAB", "Robotics", "Control Systems"],
    highlights: ["25% efficiency improvement", "Diverse terrain stability"],
  },
  {
    title: "Reinforcement Learning on a Bipedal Robot",
    period: "Jan 2024 – Mar 2024",
    image: "/projects/rl-biped.jpg",
    description: [
      "Crafted a simulation environment using MyoSuite, a wrapper over MuJoCo, for a bipedal model, customizing joint dynamics and control via XML configurations for precise torque application and improved motion fidelity",
      "Implemented and fine-tuned multiple reinforcement learning policies with Stable Baselines3, optimizing Cassie's dynamic stabilization and accurate waypoint navigation through complex reward structures",
      "Achieved bipedal locomotion by integrating quaternion joint state extraction and applying specific torque values, guided by policy optimization in Stable Baselines3, ensuring dynamic walking performance across varied simulated terrains",
    ],
    technologies: ["Stable Baselines3", "MuJoCo", "MyoSuite", "Reinforcement Learning", "Python"],
    highlights: ["Dynamic walking", "Complex reward structures", "Varied terrain performance"],
  },
];

export const contactInfo = {
  email: "samala.n@northeastern.edu",
  phone: "+1 857-230-7596",
  location: "Boston, MA",
  linkedin: "https://www.linkedin.com/in/varun-samala-0907b41b0/",
  github: "https://github.com/varunsamalaNEU",
};
