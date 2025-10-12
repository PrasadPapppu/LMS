import Course from "../models/Course.js";


// get all courses

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({isPublished: true}).select
        (['-courseContent', '-enrolledStudents',]).populate({path: 'educator'});
        res.json({ success: true, courses });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

// get course by id
export const getCourseId = async (req, res) => {
    const { id } = req.params;
    
    try {
        
        const courseData = await Course.findById(id).populate({ path: 'educator'});

        // remove lecture if ispreview is false
        courseData.courseContent.forEach(chapter =>{
            chapter.chapterContent.forEach(lecture =>{
                if(!lecture.isPreview){
                    lecture.videoUrl = "";
                }
            })
        })
        if (!courseData) {
            return res.json({ success: false, message: "Course not found" });
        }
        res.json({ success: true, course: courseData });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

