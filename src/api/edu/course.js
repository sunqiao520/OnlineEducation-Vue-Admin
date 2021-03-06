import request from '@/utils/request'

export default {
    //1 添加课程信息
    addCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/addCourserInfo`,
            method: 'post',
            data:courseInfo
        })
    },

    //2 查询所有讲师
    getListTeacher() {
        return request({
            url: `/eduservice/teacher/findAll`,
            method: 'get'
        })
    },

    //根据课程id 查询基本信息
    getCourseInfoId(id) {
        return request({
            url: `/eduservice/course/getCourseInfo/${id}`,
            method: 'get'
        })
    },

    //修改课程信息
    updateCourseInfo(courseInfo) {
        return request({
            url: `/eduservice/course/updateCourseInfo`,
            method: 'post',
            data:courseInfo
        })
    },
    //课程确认信息显示
    getPublishCourseInfo(id){
        return request({
            url: `/eduservice/course/getPublishCourseInfo/${id}`,
            method: 'get'
        })
    },
     //课程最终发布
     publishCourse(id){
        return request({
            url: `/eduservice/course/publishCourse/${id}`,
            method: 'post'
        })
    },
    //TODO 课程列表
    getListCourse(id){
        return request({
            url: `/eduservice/course`,
            method: 'get'
        })
    },    

}

