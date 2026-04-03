"use client";



import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Search, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ["All Articles", ...Array.from(new Set(BLOG_POSTS.map(post => post.category)))];
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Separate the first post as the featured post if no filters are active
  const isFiltering = searchQuery !== '' || activeCategory !== 'All Articles';
  const featuredPost = !isFiltering && filteredPosts.length > 0 ? filteredPosts[0] : null;
  const gridPosts = featuredPost ? filteredPosts.slice(1) : filteredPosts;

  return (
    // Added larger top padding (pt-32 lg:pt-40) and overflow-hidden to fix cutting off
    <main className="min-h-screen bg-[#f9f8ee] pt-32 lg:pt-40 pb-24 px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16 space-y-5 lg:space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white text-heavy-metal px-4 py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-widest rounded-full shadow-sm border border-heavy-metal/10"
          >
            <BookOpen size={14} className="text-old-gold" /> Insight and Updates
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-black uppercase tracking-tighter leading-[1] text-heavy-metal px-2"
          >
            A Collection of <span className="text-old-gold italic">Hand-Picked</span> Articles
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-heavy-metal/60 text-sm md:text-base font-medium leading-relaxed max-w-xl mx-auto px-4"
          >
            Deep dives, insights, and honest advice to navigate the property maintenance landscape and elevate your living standards.
          </motion.p>
        </div>

        {/* --- FILTERS & SEARCH --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-10 lg:mb-12">
          <div className="relative w-full lg:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-heavy-metal/40 group-focus-within:text-old-gold transition-colors" size={18} />
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-heavy-metal/10 rounded-xl py-3 pl-12 pr-4 text-sm font-medium text-heavy-metal placeholder:text-heavy-metal/40 focus:outline-none focus:border-old-gold transition-all"
            />
          </div>

          {/* Scrollable on small devices to prevent wrapping issues */}
          <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 hide-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-xl text-[10px] md:text-[11px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'bg-old-gold/10 text-old-gold border-old-gold/30' 
                    : 'bg-white text-heavy-metal/60 border-heavy-metal/10 hover:border-old-gold/30 hover:text-heavy-metal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- FEATURED POST --- */}
        {featuredPost && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 lg:mb-12"
          >
            <Link 
              href={`/blogs/${featuredPost.slug}`}
              className="group flex flex-col lg:flex-row bg-white rounded-[1.5rem] lg:rounded-[2rem] border border-heavy-metal/10 overflow-hidden hover:shadow-2xl hover:border-old-gold/40 transition-all duration-500"
            >
              {/* Responsive min-height for mobile vs desktop */}
              <div className="relative w-full lg:w-3/5 aspect-[16/9] lg:aspect-auto min-h-[250px] sm:min-h-[300px] lg:min-h-[400px] overflow-hidden">
                <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 lg:top-6 lg:left-6 bg-white/90 backdrop-blur-md text-heavy-metal text-[10px] font-black uppercase tracking-widest px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg shadow-sm">
                  ★ Featured
                </div>
              </div>
              
              <div className="p-6 sm:p-8 lg:p-12 lg:w-2/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-old-gold font-bold text-[10px] uppercase tracking-widest mb-3 lg:mb-4">
                  <span>{featuredPost.category}</span>
                  <span className="w-1 h-1 rounded-full bg-heavy-metal/20" />
                  <span className="text-heavy-metal/50">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-3 lg:mb-4 group-hover:text-old-gold transition-colors text-heavy-metal">
                  {featuredPost.title}
                </h2>
                <p className="text-heavy-metal/70 font-medium text-sm sm:text-base leading-relaxed mb-6 lg:mb-8 line-clamp-3 lg:line-clamp-none">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-2 text-heavy-metal font-bold text-[11px] lg:text-[12px] uppercase tracking-widest group-hover:text-old-gold transition-colors mt-auto">
                  Read Article <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* --- STANDARD GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
            >
              <Link 
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-white border border-heavy-metal/10 rounded-[1.25rem] lg:rounded-[1.5rem] hover:shadow-xl hover:border-old-gold/40 transition-all duration-300 overflow-hidden h-full"
              >
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-old-gold font-bold text-[9px] lg:text-[10px] uppercase tracking-widest mb-3">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-heavy-metal/20" />
                    <span className="text-heavy-metal/50">{post.date}</span>
                  </div>
                  <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight leading-tight mb-3 group-hover:text-old-gold transition-colors line-clamp-2 text-heavy-metal">
                    {post.title}
                  </h4>
                  <p className="text-heavy-metal/60 font-medium text-xs lg:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-heavy-metal font-bold text-[10px] lg:text-[11px] uppercase tracking-widest group-hover:text-old-gold transition-colors mt-auto">
                    Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
      
      {/* Optional: Add this class to your global CSS to hide the scrollbar but keep functionality */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}