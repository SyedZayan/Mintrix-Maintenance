// src/components/sections/BlogSection.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data'; 

export default function BlogSection() {
  return (
    <section className="relative bg-[#f9f8ee] py-16 md:py-24 px-6 md:px-12 overflow-hidden border-t border-heavy-metal/10">
      
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 md:gap-3 bg-old-gold/10 text-old-gold px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full border border-old-gold/20"
            >
              <BookOpen size={14} /> Industry Insights
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.5rem] font-black uppercase italic tracking-tighter leading-[0.95] text-heavy-metal"
            >
              News & Insights <br /> <span className="text-old-gold">Journal.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-3 text-heavy-metal font-bold text-xs uppercase tracking-widest hover:text-old-gold transition-colors group pb-2 border-b-2 border-heavy-metal hover:border-old-gold"
            >
              View All Articles 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* --- BLOG GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1), duration: 0.6 }}
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-heavy-metal/10 shadow-lg hover:shadow-2xl hover:border-old-gold/40 transition-all duration-500 overflow-hidden rounded-3xl h-full"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-heavy-metal">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-heavy-metal text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    {post.category}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-heavy-metal/50 font-bold text-[10px] uppercase tracking-widest mb-4">
                    <Clock size={12} /> {post.date}
                  </div>
                  
                  <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-old-gold transition-colors line-clamp-2 text-heavy-metal">
                    {post.title}
                  </h4>
                  
                  <p className="text-heavy-metal/70 font-medium text-sm leading-relaxed mb-8 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-old-gold font-bold text-[11px] uppercase tracking-widest mt-auto group-hover:text-heavy-metal transition-colors">
                    Read Dispatch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}