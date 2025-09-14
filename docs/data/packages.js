/*
 * Copyright 2025 Pralhad Nasane
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Package data for Gmail Filters Collection
const packageData = [
    {
        id: 'basic-user',
        title: 'Basic User',
        icon: '👤',
        count: '8 filters',
        description: 'Essential filters for everyday email organization and basic inbox management.',
        category: 'basic',
        filters: 8,
        popular: false,
        features: [
            'Basic email organization',
            'Newsletter management',
            'Spam protection',
            'Important email priority'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/basic-user/basic_user_filters.xml',
        setupGuide: {
            title: 'Basic User Setup Guide',
            steps: [
                {
                    title: 'Download the Filter Package',
                    description: 'Click the download button to get the basic user filter XML file.',
                    code: 'basic_user_filters.xml'
                },
                {
                    title: 'Open Gmail Settings',
                    description: 'Go to Gmail > Settings (gear icon) > See all settings > Filters and Blocked Addresses.',
                    code: 'Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Filters',
                    description: 'Click "Import filters" and select the downloaded XML file.',
                    code: 'Import filters > Choose file > basic_user_filters.xml'
                },
                {
                    title: 'Apply Filters',
                    description: 'Review the filters and click "Create filters" to apply them to your inbox.',
                    code: 'Create filters'
                }
            ]
        }
    },
    {
        id: 'business-professional',
        title: 'Business Professional',
        icon: '💼',
        count: '15 filters',
        description: 'Comprehensive filters for business communications, meetings, and professional networking.',
        category: 'professional',
        filters: 15,
        popular: true,
        features: [
            'Meeting and calendar organization',
            'Client communication priority',
            'Invoice and payment tracking',
            'Professional network management'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/business-professional/business_professional_filters.xml',
        setupGuide: {
            title: 'Business Professional Setup Guide',
            steps: [
                {
                    title: 'Download Business Filters',
                    description: 'Download the comprehensive business professional filter package.',
                    code: 'business_professional_filters.xml'
                },
                {
                    title: 'Access Gmail Settings',
                    description: 'Navigate to Gmail settings and go to Filters section.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Business Filters',
                    description: 'Import the business filter XML file to organize professional emails.',
                    code: 'Import filters > business_professional_filters.xml'
                },
                {
                    title: 'Activate Professional Organization',
                    description: 'Apply all filters to start automatic business email organization.',
                    code: 'Create filters > Apply to existing emails'
                }
            ]
        }
    },
    {
        id: 'ecommerce-seller',
        title: 'E-commerce Seller',
        icon: '🛒',
        count: '12 filters',
        description: 'Specialized filters for online sellers managing orders, payments, and customer communications.',
        category: 'business',
        filters: 12,
        popular: false,
        features: [
            'Order notification management',
            'Payment processing alerts',
            'Customer inquiry organization',
            'Platform-specific filtering'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/ecommerce-seller/ecommerce_seller_filters.xml',
        setupGuide: {
            title: 'E-commerce Seller Setup Guide',
            steps: [
                {
                    title: 'Download E-commerce Filters',
                    description: 'Get the specialized e-commerce seller filter package.',
                    code: 'ecommerce_seller_filters.xml'
                },
                {
                    title: 'Open Gmail Configuration',
                    description: 'Access Gmail settings to configure e-commerce filters.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Seller Filters',
                    description: 'Import filters to organize orders, payments, and customer emails.',
                    code: 'Import filters > ecommerce_seller_filters.xml'
                },
                {
                    title: 'Enable E-commerce Organization',
                    description: 'Activate filters to streamline your online business communications.',
                    code: 'Create filters > Organize business emails automatically'
                }
            ]
        }
    },
    {
        id: 'freelancer-entrepreneur',
        title: 'Freelancer & Entrepreneur',
        icon: '🚀',
        count: '14 filters',
        description: 'Dynamic filters for freelancers and entrepreneurs managing multiple projects and clients.',
        category: 'professional',
        filters: 14,
        popular: true,
        features: [
            'Project-based organization',
            'Client communication tracking',
            'Invoice and contract management',
            'Networking and opportunity alerts'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/freelancer-entrepreneur/freelancer_entrepreneur_filters.xml',
        setupGuide: {
            title: 'Freelancer & Entrepreneur Setup Guide',
            steps: [
                {
                    title: 'Download Freelancer Filters',
                    description: 'Download the comprehensive freelancer and entrepreneur filter package.',
                    code: 'freelancer_entrepreneur_filters.xml'
                },
                {
                    title: 'Navigate to Gmail Settings',
                    description: 'Go to Gmail settings to set up freelancer-specific organization.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Freelancer Filters',
                    description: 'Import filters to organize client projects and business communications.',
                    code: 'Import filters > freelancer_entrepreneur_filters.xml'
                },
                {
                    title: 'Activate Project Organization',
                    description: 'Enable filters to automatically organize your freelance business emails.',
                    code: 'Create filters > Organize by clients and projects'
                }
            ]
        }
    },
    {
        id: 'parent-family',
        title: 'Parent & Family',
        icon: '👨‍👩‍👧‍👦',
        count: '11 filters',
        description: 'Family-focused filters for managing school communications, activities, and household organization.',
        category: 'family',
        filters: 11,
        popular: false,
        features: [
            'School and education emails',
            'Family activity coordination',
            'Health and medical organization',
            'Household service management'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/parent-family/parent_family_filters.xml',
        setupGuide: {
            title: 'Parent & Family Setup Guide',
            steps: [
                {
                    title: 'Download Family Filters',
                    description: 'Get the specialized family and parent filter package.',
                    code: 'parent_family_filters.xml'
                },
                {
                    title: 'Access Gmail Settings',
                    description: 'Open Gmail settings to configure family-oriented filters.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Family Filters',
                    description: 'Import filters to organize school, activities, and family communications.',
                    code: 'Import filters > parent_family_filters.xml'
                },
                {
                    title: 'Enable Family Organization',
                    description: 'Activate filters to streamline family and household email management.',
                    code: 'Create filters > Organize family communications'
                }
            ]
        }
    },
    {
        id: 'senior-retiree',
        title: 'Senior & Retiree',
        icon: '🧓',
        count: '9 filters',
        description: 'Thoughtfully designed filters for seniors focusing on essential communications and security.',
        category: 'senior',
        filters: 9,
        popular: false,
        features: [
            'Healthcare and medical priority',
            'Financial security alerts',
            'Family communication emphasis',
            'Simplified organization'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/senior-retiree/senior_retiree_filters.xml',
        setupGuide: {
            title: 'Senior & Retiree Setup Guide',
            steps: [
                {
                    title: 'Download Senior Filters',
                    description: 'Download the senior and retiree-focused filter package.',
                    code: 'senior_retiree_filters.xml'
                },
                {
                    title: 'Open Gmail Settings',
                    description: 'Navigate to Gmail settings with simplified interface focus.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Senior Filters',
                    description: 'Import filters designed for healthcare, finance, and family communications.',
                    code: 'Import filters > senior_retiree_filters.xml'
                },
                {
                    title: 'Activate Simple Organization',
                    description: 'Enable filters for straightforward, security-focused email organization.',
                    code: 'Create filters > Organize important communications'
                }
            ]
        }
    },
    {
        id: 'student',
        title: 'Student',
        icon: '🎓',
        count: '10 filters',
        description: 'Student-centric filters for academic communications, assignments, and campus life.',
        category: 'education',
        filters: 10,
        popular: true,
        features: [
            'Academic email organization',
            'Assignment and deadline alerts',
            'Campus activity notifications',
            'Financial aid and billing'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/student/student_filters.xml',
        setupGuide: {
            title: 'Student Setup Guide',
            steps: [
                {
                    title: 'Download Student Filters',
                    description: 'Get the comprehensive student filter package for academic organization.',
                    code: 'student_filters.xml'
                },
                {
                    title: 'Access Gmail Settings',
                    description: 'Go to Gmail settings to set up academic email organization.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Student Filters',
                    description: 'Import filters to organize academic, campus, and student life emails.',
                    code: 'Import filters > student_filters.xml'
                },
                {
                    title: 'Enable Academic Organization',
                    description: 'Activate filters to automatically organize your academic communications.',
                    code: 'Create filters > Organize academic emails'
                }
            ]
        }
    },
    {
        id: 'youtuber-developer',
        title: 'YouTuber & Developer',
        icon: '💻',
        count: '16 filters',
        description: 'Advanced filters for content creators and developers managing multiple platforms and projects.',
        category: 'content',
        filters: 16,
        popular: true,
        features: [
            'Platform notification management',
            'Collaboration and PR tracking',
            'Monetization and analytics alerts',
            'Technical communication organization'
        ],
        downloadUrl: 'https://raw.githubusercontent.com/Pralhad-Nasane/gmail-filters-collection/main/filters/youtuber-developer/youtuber_developer_filters.xml',
        setupGuide: {
            title: 'YouTuber & Developer Setup Guide',
            steps: [
                {
                    title: 'Download Creator Filters',
                    description: 'Download the comprehensive YouTuber and developer filter package.',
                    code: 'youtuber_developer_filters.xml'
                },
                {
                    title: 'Navigate to Gmail Settings',
                    description: 'Access Gmail settings to configure creator and developer filters.',
                    code: 'Gmail > Settings > Filters and Blocked Addresses'
                },
                {
                    title: 'Import Creator Filters',
                    description: 'Import filters to organize platform notifications, collaborations, and technical emails.',
                    code: 'Import filters > youtuber_developer_filters.xml'
                },
                {
                    title: 'Activate Creator Organization',
                    description: 'Enable filters to streamline content creation and development communications.',
                    code: 'Create filters > Organize creator and dev emails'
                }
            ]
        }
    }
];

// Make packageData globally available
window.packageData = packageData;