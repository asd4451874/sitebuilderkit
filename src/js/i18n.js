/**
 * 多语言支持模块
 */
const I18N = {
    // 当前语言
    currentLang: 'zh',
    
    // 语言资源
    resources: {},
    
    /**
     * 初始化多语言支持
     */
    init: async function() {
        // 加载默认语言资源
        await this.loadLanguage(this.currentLang);
        
        // 设置语言切换事件
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.switchLanguage(lang);
            });
            
            // 设置当前语言按钮为激活状态
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
        
        // 应用翻译
        this.applyTranslations();
    },
    
    /**
     * 加载语言资源
     * @param {string} lang - 语言代码
     */
    loadLanguage: async function(lang) {
        try {
            const response = await fetch(`i18n/${lang}.json`);
            this.resources[lang] = await response.json();
        } catch (error) {
            console.error(`Failed to load language: ${lang}`, error);
        }
    },
    
    /**
     * 切换语言
     * @param {string} lang - 语言代码
     */
    switchLanguage: async function(lang) {
        // 如果语言资源未加载，则加载
        if (!this.resources[lang]) {
            await this.loadLanguage(lang);
        }
        
        // 更新当前语言
        this.currentLang = lang;
        
        // 更新语言按钮状态
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // 更新 HTML 语言属性
        document.documentElement.setAttribute('lang', lang);
        
        // 应用翻译
        this.applyTranslations();
    },
    
    /**
     * 应用翻译到页面元素
     */
    applyTranslations: function() {
        const resources = this.resources[this.currentLang];
        if (!resources) return;
        
        // 查找所有带有 data-i18n 属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key, resources);
            
            if (translation) {
                // 对于 input 元素，设置 placeholder
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.setAttribute('placeholder', translation);
                } else {
                    // 对于其他元素，设置内容
                    element.textContent = translation;
                }
            }
        });
    },
    
    /**
     * 根据键获取翻译
     * @param {string} key - 翻译键，格式为 "section.key"
     * @param {object} resources - 语言资源
     * @returns {string|null} - 翻译文本或 null
     */
    getTranslation: function(key, resources) {
        const keys = key.split('.');
        let result = resources;
        
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                return null;
            }
        }
        
        return typeof result === 'string' ? result : null;
    }
};

// 页面加载完成后初始化多语言支持
document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});