/**
 * 主要功能模块
 */
const App = {
    // 当前激活的分类
    activeCategory: null,
    
    // 示例工具数据（实际项目中应从API或JSON文件加载）
    toolsData: {
        'requirement-analysis': [
            {
                name: '谷歌下拉词',
                description: '输入一个词可以获得很多个关联词，并且可以直接跳转Google Trends',
                link: 'https://www.searchsuggest.tips/?keyword=',
                platform: 'Web',
                tags: ['关键词', 'SEO']
            },
            {
                name: 'Toolify',
                description: '全球第二大的AI导航网站，可以找到新品灵感',
                link: 'https://www.toolify.ai',
                platform: 'Web',
                tags: ['产品', '需求分析']
            },
            {
                name: 'Theresanaiforthat',
                description: '全球第一大的AI导航网站，AI工具需求',
                link: 'https://theresanaiforthat.com/requests',
                platform: 'Web',
                tags: ['产品', '需求分析']
            },
            {
                name: 'Ahrefs',
                description: '关键词检测工具，提供查询关键词的KD（难度），外链数量，SEO优化等',
                link: 'https://ahrefs.com/',
                platform: 'Web',
                tags: ['关键词', 'SEO']
            },
            {
                name: 'Google trends',
                description: '提供免费 SEO 工具，包括流量分析、关键词研究、网站关键词等',
                link: 'https://trends.google.ad/',
                platform: 'Web',
                tags: ['关键词', '流量趋势']
            }
        ],
        'website-traffic': [
            {
                name: 'Google Search Console',
                description: '免费工具，帮助网站管理员了解其网站在 Google 搜索结果中的表现，并提供改进建议',
                link: 'https://search.google.com',
                platform: 'Web',
                tags: ['网站流量分析']
            },
            {
                name: 'Google analytics',
                description: '免费分析工具，帮助网站所有者了解用户行为和网站性能，从而优化网站',
                link: 'https://analytics.google.com/',
                platform: 'Web',
                tags: ['网站流量分析']
            },
            {
                name: 'Bing Webmaster Yools',
                description: '免费工具，帮助网站管理员了解其网站在 Bing 搜索结果中的表现，并提供改进建议',
                link: 'https://www.bing.com/webmasters/submiturl',
                platform: 'Web',
                tags: ['网站流量分析']
            },
            {
                name: 'Aitdk',
                description: '提供免费 SEO 工具，包括流量分析、关键词研究、网站关键词等',
                link: 'https://aitdk.com',
                platform: 'Web',
                tags: ['网站流量分析']
            },
            {
                name: 'Sermush',
                description: '付费 SEO 工具，提供关键词研究、竞争分析、网站审计、内容营销等功能',
                link: 'https://semrush.com',
                platform: 'Web',
                tags: ['关键词', 'SEO']
            }
        ],
        'website-domains': [
            {
                name: 'Leandomainsearch',
                description: '可以用于随机生成域名，帮助您快速构思和测试网站域名，并且可以检测域名是否已经被注册，展示域名的注册趋势',
                link: 'https://leandomainsearch.com/',
                platform: 'Web',
                tags: ['域名查询']
            },
            {
                name: 'Spaceship',
                description: '简洁易用的域名购买工具，支持多种付费方式，域名管理功能齐全',
                link: 'https://spaceship.com',
                platform: 'Web',
                tags: ['域名购买']
            },
            {
                name: 'Namecheap',
                description: '提供丰富的域名服务，包括域名注册、托管、SSL证书等，价格相对较低，支持多种语言',
                link: 'https://namecheap.com',
                platform: 'Web',
                tags: ['域名购买']
            }
        ],
        'website-deployment': [
            {
                name: 'GitHub',
                description: '代码托管平台，方便开发者存储、分享和协作代码。支持多种编程语言，提供版本控制和项目协作功能',
                link: 'https://github.com',
                platform: 'Web',
                tags: ['代码托管', '开源项目']
            },
            {
                name: 'Cloudflare',
                description: 'CDN 和网络安全服务提供商，提供域名解析、DDoS 防护、WAF 等功能，可提高网站速度和安全性',
                link: 'https://Cloudflare.com',
                platform: 'Web',
                tags: ['网站部署']
            },
            {
                name: 'Vercel',
                description: 'CDN 和网络安全服务提供商，提供域名解析、DDoS 防护、WAF 等功能，可提高网站速度和安全性',
                link: 'https://vercel.com',
                platform: 'Web',
                tags: ['网站部署']
            }
        ],
        'api-tools': [
            {
                name: 'openrouter',
                description: '提供超过100种大模型（含GPT-4、Claude、DeepSeek）的统一API接口，支持多模态输入输出及智能路由选择，适合中小团队快速集成AI能力',
                link: 'https://openrouter.ai/',
                platform: 'Web',
                tags: ['API', '大模型']
            },
            {
                name: 'replicate',
                description: '全球最大开源模型托管平台（超2.5万个模型），通过API实现全流程开发（标注、训练、部署），支持混合专家模型（MoE）的高效推理，适合复杂场景的端到端集成',
                link: 'https://replicate.com/',
                platform: 'Web',
                tags: ['API', '模型托管']
            },
            {
                name: 'siliconflow',
                description: '聚焦国产化基础设施，其自研推理引擎（SiiconLM）实现10倍速提升，支持128K超长上下文与实时文生图，API调用成本极低',
                link: 'https://siliconflow.cn',
                platform: 'Web',
                tags: ['API', '推理引擎']
            },
            {
                name: 'Postman',
                description: 'API开发和测试工具，简化API的创建、共享和测试过程',
                link: 'https://www.postman.com/',
                platform: 'Windows, macOS, Linux, Web',
                tags: ['API测试', '协作', '文档']
            },
            {
                name: 'Swagger',
                description: 'API设计和文档工具，帮助团队设计、构建和文档化RESTful API',
                link: 'https://swagger.io/',
                platform: 'Web',
                tags: ['API文档', 'OpenAPI', '设计']
            }
        ],
        'programming-tutorials': [
            {
                name: 'MDN Web Docs',
                description: 'Mozilla提供的全面Web技术文档，涵盖HTML、CSS和JavaScript',
                link: 'https://developer.mozilla.org/',
                platform: 'Web',
                tags: ['Web开发', '文档', '教程']
            },
            {
                name: 'freeCodeCamp',
                description: '免费学习编程的平台，提供互动课程和项目',
                link: 'https://www.freecodecamp.org/',
                platform: 'Web',
                tags: ['免费', '互动', '证书']
            }
        ],
        'blogs': [
            {
                name: 'CSS-Tricks',
                description: '关于CSS和前端开发的博客，提供教程、技巧和最佳实践',
                link: 'https://css-tricks.com/',
                platform: 'Web',
                tags: ['CSS', '前端', '设计']
            },
            {
                name: 'Smashing Magazine',
                description: '专注于Web设计和开发的在线杂志，提供高质量的文章和资源',
                link: 'https://www.smashingmagazine.com/',
                platform: 'Web',
                tags: ['设计', 'UX', '前端']
            }
        ]
    },
    
    /**
     * 初始化应用
     */
    init: function() {
        // 设置导航点击事件
        this.setupNavigation();
        
        // 设置搜索功能
        this.setupSearch();
        
        // 设置移动端菜单切换
        this.setupMobileMenu();
        
        // 设置Logo点击事件
        this.setupLogoClick();
        
        // 生成首页分类卡片
        this.generateHomeCategoryCards();
        
        // 默认显示首页
        this.showHome();
    },
    
    /**
     * 设置Logo点击事件
     */
    setupLogoClick: function() {
        document.querySelector('.logo').addEventListener('click', (e) => {
            e.preventDefault();
            this.showHome();
        });
    },
    
    /**
     * 生成首页分类卡片并添加点击事件
     */
    generateHomeCategoryCards: function() {
        const categoriesGrid = document.createElement('div');
        categoriesGrid.className = 'categories-grid';
        categoriesGrid.innerHTML = this.generateCategoryCards();
        
        // 添加到首页
        const homeContent = document.querySelector('#home .hero');
        homeContent.insertAdjacentElement('afterend', categoriesGrid);
        
        // 为分类卡片添加点击事件
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const category = card.getAttribute('data-category');
                
                // 更新激活的分类
                this.activeCategory = category;
                
                // 更新导航链接的激活状态
                document.querySelectorAll('.main-nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                document.querySelector(`.main-nav a[data-category="${category}"]`).classList.add('active');
                
                // 显示对应分类的工具
                this.showCategoryTools(category);
            });
        });
    },
    
    /**
     * 设置导航点击事件
     */
    setupNavigation: function() {
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                this.activeCategory = category;
                
                // 更新导航链接的激活状态
                document.querySelectorAll('.main-nav a').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                link.classList.add('active');

                // 显式切换内容区域的显示
                document.querySelector('#home').classList.remove('active');
                document.querySelector('#category-content').classList.add('active');
                
                // 显示对应分类的工具
                this.showCategoryTools(category);
                
                // 在移动设备上，点击导航后关闭菜单
                if (window.innerWidth < 768) {
                    document.querySelector('.sidebar').classList.remove('open');
                }

            });
        });
    },
    
    /**
     * 设置搜索功能
     */
    setupSearch: function() {
        const headerSearchInput = document.querySelector('.search-input');
        const headerSearchButton = document.querySelector('.search-button');
        const heroSearchInput = document.querySelector('.hero-search-input');
        const heroSearchButton = document.querySelector('.hero-search-button');

        // 绑定页头搜索框事件
        if (headerSearchButton) {
            headerSearchButton.addEventListener('click', () => {
                const query = headerSearchInput.value.trim().toLowerCase();
                if (query) {
                    this.searchTools(query);
                }
            });
        }

        if (headerSearchInput) {
            headerSearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = headerSearchInput.value.trim().toLowerCase();
                    if (query) {
                        this.searchTools(query);
                    }
                }
            });
        }

        // 绑定首页搜索框事件
        if (heroSearchButton) {
            heroSearchButton.addEventListener('click', () => {
                const query = heroSearchInput.value.trim().toLowerCase();
                if (query) {
                    this.searchTools(query);
                }
            });
        }

        if (heroSearchInput) {
            heroSearchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = heroSearchInput.value.trim().toLowerCase();
                    if (query) {
                        console.log('Hero search input keypress Enter, query:', query);
                        this.searchTools(query);
                    }
                }
            });
        }
    },
    
    /**
     * 设置移动端菜单切换
     */
    setupMobileMenu: function() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });
    },
    
    /**
     * 显示首页内容
     */
    showHome: function() {
        // 显示首页内容，隐藏分类内容
        document.querySelector('#home').classList.add('active');
        document.querySelector('#category-content').classList.remove('active');
        
        // 更新页面标题
        document.title = document.querySelector('[data-i18n="home.title"]').textContent;
        
        // 移除导航链接的激活状态
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        // 重置激活的分类
        this.activeCategory = null;
        
        // 应用国际化
        I18N.applyTranslations();
    },
    
    /**
     * 生成分类卡片
     */
    generateCategoryCards: function() {
        const categories = Object.keys(this.toolsData);
        return categories.map(category => {
            const toolCount = this.toolsData[category].length;
            const categoryName = document.querySelector(`[data-category="${category}"] span`).textContent;
            return `
                <div class="category-card" data-category="${category}">
                    <div class="category-icon">
                        <i class="${this.getCategoryIcon(category)}"></i>
                    </div>
                    <h3>${categoryName}</h3>
                    <p>${toolCount} 个工具</p>
                </div>
            `;
        }).join('');
    },
    
    /**
     * 获取分类图标
     */
    getCategoryIcon: function(category) {
        const iconMap = {
            'requirement-analysis': 'lucide-search',
            'website-traffic': 'lucide-bar-chart',
            'website-domains': 'lucide-globe',
            'website-deployment': 'lucide-server',
            'api-tools': 'lucide-api',
            'programming-tutorials': 'lucide-book-open',
            'blogs': 'lucide-file-text'
        };
        return iconMap[category] || 'lucide-tool';
    },
    
    /**
     * 显示分类工具
     */
    showCategoryTools: function(category) {
        
        const tools = this.toolsData[category] || [];
        // 修改选择器，使用正确的内容区域
        const contentArea = document.querySelector('#card-container');
        const categoryName = document.querySelector(`[data-category="${category}"] span`).textContent;
        
        // 更新页面标题
        document.title = `${categoryName} | 为创造者导航`;
        
        // 确保分类内容区域显示，首页内容隐藏
        document.querySelector('#home').classList.remove('active');
        document.querySelector('#category-content').classList.add('active');
        
        // 更新分类标题
        document.querySelector('#current-category').textContent = categoryName;
        
        // 生成工具卡片
        contentArea.innerHTML = tools.map(tool => this.generateToolCard(tool)).join('');
        
        // 应用国际化
        I18N.applyTranslations();
    },
    
    /**
     * 生成工具卡片
     */
    generateToolCard: function(tool) {
        return `
            <div class="card">
                <div class="card-header">
                    <h3 class="card-title">${tool.name}</h3>
                </div>
                <div class="card-body">
                    <p class="card-description">${tool.description}</p>
                </div>
                <div class="card-footer">
                    <a href="${tool.link}" class="card-link" target="_blank" rel="noopener noreferrer"><i class="lucide-external-link"></i> <span data-i18n="card.visit">访问官网</span></a>
                    <div class="card-tags">
                        <span class="card-platform">${tool.platform}</span>
                        <div class="tags">
                            ${tool.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    /**
     * 搜索工具
     */
    searchTools: function(query) {
        // 在所有分类中搜索匹配的工具
        const results = [];
        
        Object.keys(this.toolsData).forEach(category => {
            const tools = this.toolsData[category];
            const matchedTools = tools.filter(tool => {
                return (
                    tool.name.toLowerCase().includes(query) ||
                    tool.description.toLowerCase().includes(query) ||
                    tool.tags.some(tag => tag.toLowerCase().includes(query))
                );
            });
            
            results.push(...matchedTools.map(tool => ({ ...tool, category })));
        });
        
        // 显示搜索结果
        // 修改选择器，使用正确的内容区域
        const contentArea = document.querySelector('#card-container');
        
        // 显示分类内容区域，隐藏首页内容
        document.querySelector('#home').classList.remove('active');
        document.querySelector('#category-content').classList.add('active');
        
        // 更新分类标题
        document.querySelector('#current-category').textContent = `搜索结果: "${query}"`;
        
        if (results.length > 0) {
            contentArea.innerHTML = results.map(tool => this.generateToolCard(tool)).join('');
        } else {
            contentArea.innerHTML = `<p class="no-results">没有找到匹配的工具或教程。请尝试其他关键词。</p>`;
        }
        
        // 更新页面标题
        document.title = `搜索: ${query} | 为创造者导航`;
        
        // 移除导航链接的激活状态
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.classList.remove('active');
        });
        
        // 重置激活的分类
        this.activeCategory = null;
        
        // 应用国际化
        I18N.applyTranslations();
    }
};

// 页面加载完成后初始化应用
document.addEventListener('DOMContentLoaded', () => {
    console.log('页面加载完成，初始化应用');
    App.init();
});