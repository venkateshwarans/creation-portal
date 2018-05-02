angular.module("playerApp.config", [])
.constant("config", {"SITE":{"DEFAULT_LANGUAGE":"en"},"URL":{"BASE_PREFIX":"service/","LEARNER_PREFIX":"v1/learner/","CONTENT_PREFIX":"v1/content/","CONFIG_BASE":"http://localhost:4000/api/sb/v1/","PAGE_PREFIX":"data/v1/page/assemble","USER":{"RESOURCE_BUNDLE":"resourcebundle","SIGNUP":"user/v1/create","UPDATE_USER_PROFILE":"user/v1/update","GET_PROFILE":"user/v1/read","TENANT_LOGO":"get/tenant/logo","SKILLS":"data/v1/skills","ADD_SKILLS":"user/v1/skill/add","USER_SKILLS":"user/v1/skill/read","UPDATE_PROF_VIS_FIELDS":"user/v1/profile/visibility"},"COMPOSITE":{"SEARCH":"composite/v1/search"},"COURSE":{"SEARCH":"course/v1/search","HIERARCHY":"course/v1/hierarchy","USER_CONTENT_STATE_READ":"course/v1/content/state/read","USER_CONTENT_STATE_UPDATE":"course/v1/content/state/update","GET_ENROLLED_COURSES":"course/v1/user/enrollment/list","ENROLL_USER_COURSE":"course/v1/enrol","RECOMMENDED_COURSE":"recommended/courses"},"CONTENT":{"SEARCH":"content/v1/search","CREATE":"content/v1/create","PUBLISH":"content/v1/publish","UPLOAD_MEDIA":"content/v1/media/upload","GET":"content/v1/read","RETIRE":"content/v1/retire","REJECT":"content/v1/reject","FLAG":"content/v1/flag","ACCEPT_FLAG":"content/v1/flag/accept","DISCARD_FLAG":"content/v1/flag/reject","COPY":"content/v1/copy"},"DASHBOARD":{"ORG_CREATION":"dashboard/v1/creation/org","ORG_CONSUMPTION":"dashboard/v1/consumption/org","COURSE_PROGRESS":"dashboard/v1/progress/course","COURSE_CONSUMPTION":"dashboard/v1/consumption/course"},"NOTES":{"SEARCH":"notes/v1/search","CREATE":"notes/v1/create","UPDATE":"notes/v1/update","GET":"notes/v1/read","DELETE":"notes/v1/delete"},"ROLES":{"READ":"data/v1/role/read"},"BATCH":{"CREATE":"course/v1/batch/create","UPDATE":"course/v1/batch/update","ADD_USERS":"course/v1/batch/user/add","GET_DETAILS":"course/v1/batch/read","GET_BATCHS":"course/v1/batch/list"},"ADMIN":{"USER_SEARCH":"user/v1/search","ORG_SEARCH":"org/v1/search","BULK":{"USERS_UPLOAD":"user/v1/upload","ORGANIZATIONS_UPLOAD":"org/v1/upload","STATUS":"data/v1/upload/status"},"DELETE_USER":"user/v1/block","UPDATE_USER_ORG_ROLES":"org/v1/role/assign"},"BADGE":{"GET_ISSUER_LIST":"badging/v1/issuer/list","BADGE_CLASS_SEARCH":"badging/v1/issuer/badge/search","ASSIGN":"badging/v1/issuer/badge/assertion/create"},"ORG_TYPE":{"GET":"org/v1/type/list","ADD":"org/v1/type/create","UPDATE":"org/v1/type/update"},"ANNOUNCEMENT":{"OUTBOX_LIST":"/announcement/v1/user/outbox","INBOX_LIST":"/announcement/v1/user/inbox","CREATE":"/announcement/v1/create","GET_BY_ID":"/announcement/v1/get/","RESEND":"/announcement/v1/resend/","DEFINITIONS":"/announcement/v1/definitions","READ":"/announcement/v1/read","RECEIVED":"/announcement/v1/received","CANCEL":"/announcement/v1/cancel"},"CHANNEL":{"READ":"channel/v1/read"},"FRAMEWORK":{"READ":"framework/v1/read"},"dataDrivenForms":{"READ":"data/v1/form/read"}},"FILTER":{"RESOURCES":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu","Urdu"],"contentTypes":[{"key":"TextBook","value":"Book"},{"key":"Collection","value":"Collection"},{"key":"LessonPlan","value":"LessonPlan"},{"key":"Resource","value":"Resource"}],"resourceType":["Study material","Test","Worksheet","Activity","Book","Course","Lesson Plan","Collection"],"subjects":["Assamese","Bengali","English","Gujarati","Hindi","Kannada","Malayalam","Marathi","Nepali","Oriya","Punjabi","Tamil","Telugu","Urdu","Biology","Chemistry","Physics","Mathematics","Environmental Studies","Geography","History","Political Science","Economics","Sanskrit"],"boards":["AP Board","BSER","CBSE","ICSE","MSCERT","NCERT","NCTE","TN Board","UP Board"]}},"MESSAGES":{"AUTH":{"LOGIN":{"FAILED":"invalid username and password"},"LOGOUT":{"FAILED":"Logout failed"}},"COMMON":{"ERROR":"error","INFO":"info","WARNING":"warning","SUCCESS":"success"},"RESOURCE":{"PAGE":{"START":"We are fetching content...","FAILED":"Fetching content failed, please try again later..."}},"COURSE":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."},"TOC":{"START":"We are fetching course details...","ERROR":"Unable to get course schedule details."},"ENROLL":{"START":"Enrolling....","ERROR":"Cannot enroll now.Try again later"}},"HOME":{"ENROLLED":{"START":"We are fetching enrolled courses...","FAILED":"Fetching enrolled courses failed, please try again later..."},"PAGE_API":{"START":"We are fetching data...","FAILED":"Fetching other courses failed, please try again later..."}},"PROFILE":{"HEADER":{"START":"processing...","FAILED":"Fetching profile failed, please try again later...","UPDATE":"Updating user profile failed,please try again later...","UPDATE_SUCCESS":"successfully updated profile "}},"SEARCH":{"COURSE":{"START":"We are fetching profile...","FAILED":"Fetching courses failed, please try again later...","NO_RESULT":"No result found "},"RESOURCE":{"START":"We are fetching profile...","FAILED":"Fetching resources failed, please try again later...","NO_RESULT":"No result found "}},"COLLECTION":{"PREVIEW":{"START":"Fetching data for you....","FAILED":"Unable to load data."}}},"ekstep_CP_config":{"context":{"mode":"play"},"config":{"showEndPage":false,"showStartPage":true,"host":"","apislug":"/action","repos":["/content-plugins/renderer"],"plugins":[{"id":"org.sunbird.iframeEvent","ver":1,"type":"plugin"},{"id":"org.sunbird.player.endpage","ver":1,"type":"plugin"}]},"baseURL":"/content/preview/preview.html?webview=true"},"DROPDOWN":{"COMMON":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu","Urdu"],"lessonTypes":["Story","Worksheet"],"subjects":["Assamese","Bengali","Biology","Chemistry","Economics","English","Environmental Studies","Geography","Gujarati","Hindi","History","Kannada","Malayalam","Marathi","Mathematics","Nepali","Oriya","Physics","Political Science","Punjabi","Sanskrit","Tamil","Telugu","Urdu"],"grades":["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Other"],"audiences":["Learner","Instructor"],"ageGroup":["<5","5-6","6-7","7-8","8-10",">10","Other"],"medium":["Assamese","Bengali","English","Gujarati","Hindi","Kannada","Malayalam","Marathi","Nepali","Oriya","Other","Punjabi","Tamil","Telugu","Urdu"],"boards":["AP Board","BSER","CBSE","ICSE","MSCERT","NCERT","NCTE","TN Board","UP Board"],"orgType":["technical"]}},"collection_Editor_Config":{"TextBook":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"TextBook","label":"Textbook","isRoot":true,"editable":true,"childrenTypes":["TextBookUnit"],"addType":"Editor","iconClass":"fa fa-book fa-2"},{"type":"TextBookUnit","label":"Textbook Unit","isRoot":false,"editable":true,"childrenTypes":["TextBookUnit","Collection","Story","Game","Worksheet"],"addType":"Editor","iconClass":"fa fa-folder fa-2"},{"type":"Collection","label":"Collection","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}},"Collection":{"context":{"uid":"","contentId":"","sid":"0d5b94c87052869b58e47ec692f467cd","channel":"ntp/ap","pdata":{"id":"SunbirdPortal","ver":"1.0"},"dims":["b27e743b51a22b4eed737c6a72cd4266"]},"mode":"Edit","rules":{"levels":3,"objectTypes":[{"type":"Collection","label":"Collection","isRoot":true,"editable":false,"childrenTypes":["Collection","Story","Game","Worksheet"],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Story","label":"Story","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Worksheet","label":"Worksheet","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"},{"type":"Game","label":"Game","isRoot":false,"editable":false,"childrenTypes":[],"addType":"Browser","iconClass":"fa fa-file fa-2"}]},"defaultTemplate":{}}},"TELEMETRY":{"MAX_BATCH_SIZE":20,"SYNC":"data/v1/telemetry"},"CURRENT_USER_ROLES":["CONTENT_REVIEWER"],"COMMON_ROLES_CHECK":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER"],"WORKSPACE_ACCESS_ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER","FLAG_REVIEWER","COURSE_MENTOR","BOOK_CREATOR","BOOK_REVIEWER"],"CreateLessonMimeType":"application/vnd.ekstep.ecml-archive","CreateCollectionMimeType":"application/vnd.ekstep.content-collection","MimeTypeExceptCollection":["application/pdf","video/mp4","video/x-youtube","application/vnd.ekstep.html-archive","video/youtube","application/vnd.ekstep.ecml-archive","application/epub","application/vnd.ekstep.h5p-archive","video/webm"],"USER_ROLES":["ORG_ADMIN","ORG_MEMBER","CONTENT_REVIEW","CONTENT_CURATION","CONTENT_REVIEWER","CONTENT_CREATION","CONTENT_CREATOR","ORG_MODERATOR","MEMBERSHIP_MANAGEMENT","ORG_MANAGEMENT","SYSTEM_ADMINISTRATION","ADMIN","SYSTEM_ADMIN"],"searchTypeKeys":["Courses","Library","Users","Organisations"],"sortingOptions":[{"field":"lastUpdatedOn","name":"Modified On"},{"field":"createdOn","name":"Created On"}],"upForReviewSortingOptions":[{"field":"lastUpdatedOn","name":"Updated On"},{"field":"createdOn","name":"Created On"},{"field":"name","name":"Name A-Z"}],"searchSelectionKeys":[{"id":"All","name":"All"},{"id":"Courses","name":"Courses"},{"id":"Library","name":"Library"},{"id":"Organisations","name":"Organisations"},{"id":"Users","name":"Users"}],"contributeContentType":["Collection","TextBook","Course","LessonPlan","Resource"],"MIME_TYPE":{"pdf":"application/pdf","mp4":"video/mp4","youtube":"video/x-youtube","pYoutube":"video/youtube","html":"application/vnd.ekstep.html-archive","ecml":"application/vnd.ekstep.ecml-archive","ePub":"application/epub","h5p":"application/vnd.ekstep.h5p-archive","webm":"video/webm"},"ERROR":{"PROFILE_IMAGE_UPLOAD":{"err":"400","errorType":"Bad Request"}},"UNLISTED_CONTENT_TYPE":"Unlisted","AnncmntMaxFileSizeToUpload":1024000,"AnncmntFileExtensionToUpload":"application/pdf, application/jpg, application/png","AnncmntAllowedFileExtension":["png","pdf","jpg"],"WORKSPACE":{"CREATE":{"BOOK":{"ROLES":["BOOK_CREATOR"]},"RESOURCE":{"RESOURCE_TYPES":["Study material","Test","Worksheet","Activity"]}},"DRAFT":{"ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER","BOOK_CREATOR"]},"REVIEW":{"ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER","BOOK_CREATOR"]},"PUBLISHED":{"ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER","BOOK_CREATOR"]},"ALL_UPLOADS":{"ROLES":["CONTENT_CREATOR","CONTENT_REVIEW","CONTENT_CREATION","CONTENT_REVIEWER"]},"UP_FOR_REVIEW":{"ROLES":["CONTENT_REVIEWER","CONTENT_REVIEW","BOOK_REVIEWER","FLAG_REVIEWER"],"contentTypes":[{"key":"Collection","value":"Collection"},{"key":"LessonPlan","value":"LessonPlan"},{"key":"Resource","value":"Resource"},{"key":"Course","value":"Course"}]}},"PROFILE":{"languages":["Bengali","English","Gujarati","Hindi","Kannada","Marathi","Punjabi","Tamil","Telugu","Urdu","Assamese"]},"USER_SEARCH":{"DOWNLOAD_BUTTON_VISIBILITY":false},"CHECK_LIST_CONFIG":{"reject":{"title":"Request Changes","subtitle":"Please tick the reasons for requesting changes and provide detailed comments:","contents":[{"name":"Appropriateness","index":1,"checkList":["Has Hate speech, Abuse, Violence, Profanity","Has Sexual content, Nudity or Vulgarity","Has Discriminatory or Defamatory content","Is not suitable for children"]},{"name":"Content details","index":2,"checkList":["Inappropriate Title or Description","Incorrect Board, Grade, Subject or Medium","Inappropriate tags such as Resource Type or Concepts","Irrelevant Keywords"]},{"name":"Usability","index":3,"checkList":["Content is NOT playing correctly","CANNOT see the content clearly on Desktop and App","Audio is NOT clear or NOT easy to understand","Spelling mistakes found in text used","Language is NOT simple to understand"]}],"comments":{"required":true,"label":"Comments"},"buttons":{"cancel":"Cancel","proceed":"Request changes"}},"publish":{"title":"Publish","subtitle":"Please confirm that ALL the following items are verified (by ticking the check-boxes) before you can publish:","contents":[{"name":"Appropriateness","index":1,"checkList":["No Hate speech, Abuse, Violence, Profanity","No Sexual content, Nudity or Vulgarity","No Discrimination or Defamation","Is suitable for children"]},{"name":"Content details","index":2,"checkList":["Appropriate Title, Description","Correct Board, Grade, Subject, Medium","Appropriate tags such as Resource Type, Concepts","Relevant Keywords"]},{"name":"Usability","index":3,"checkList":["Content plays correctly","Can see the content clearly on Desktop and App","Audio (if any) is clear and easy to understand","No Spelling mistakes in the text","Language is simple to understand"]}],"comments":{"required":false,"label":"Comments"},"buttons":{"cancel":"Cancel","proceed":"Publish"}},"read":{"title":"Review Comments","subtitle":""}}});
