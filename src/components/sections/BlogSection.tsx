"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data'; 

export default function BlogSection() {
  return (
    // Locked to 100dvh (dynamic viewport height) to fit perfectly on screen without vertical scroll
    <section className="relative bg-[#f9f8ee] h-[100dvh] min-h-[600px] max-h-[850px] flex flex-col justify-center overflow-hidden border-t border-heavy-metal/10 py-4 lg:py-6">
      
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-old-gold/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/4" />

      <div className="max-w-[1440px] mx-auto relative z-10 px-6 md:px-12 w-full">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-5 md:mb-6 lg:mb-8">
          <div className="space-y-2 md:space-y-3">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-old-gold/10 text-old-gold px-3 py-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-wider rounded-full border border-old-gold/20"
            >
              <BookOpen size={12} /> Industry Insights
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[2.5rem] font-black uppercase italic tracking-tighter leading-[0.95] text-heavy-metal"
            >
              News & Insights <br className="hidden sm:block" /> <span className="text-old-gold">Journal.</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="shrink-0"
          >
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-heavy-metal font-bold text-[10px] md:text-[11px] uppercase tracking-widest hover:text-old-gold transition-colors group pb-1 border-b-2 border-heavy-metal hover:border-old-gold"
            >
              View All Articles 
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* --- BLOG GRID / MOBILE SCROLL --- */}
      <div className="max-w-[1440px] mx-auto relative z-10 w-full pl-6 pr-6 md:px-12">
        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar snap-x snap-mandatory">
          {BLOG_POSTS.slice(0, 3).map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1), duration: 0.6 }}
              className="w-[85vw] sm:w-[60vw] md:w-auto shrink-0 snap-center flex"
            >
              <Link 
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white border border-heavy-metal/10 shadow-lg hover:shadow-2xl hover:border-old-gold/40 transition-all duration-500 overflow-hidden rounded-[1.25rem] md:rounded-[1.5rem] h-full w-full"
              >
                {/* Image Container - Ultra-wide cinematic aspect ratio (21:9) saves max vertical height */}
                <div className="relative w-full aspect-[21/9] md:aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-heavy-metal shrink-0">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 lg:top-4 lg:left-4 bg-white/90 backdrop-blur-md text-heavy-metal text-[8px] md:text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                    {post.category}
                  </div>
                </div>

                {/* Content Container - Highly compressed for 100vh fit with excerpt */}
                <div className="p-4 lg:p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1.5 text-heavy-metal/50 font-bold text-[8px] md:text-[9px] uppercase tracking-widest mb-2">
                    <Clock size={10} /> {post.date}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[15px] md:text-base lg:text-lg font-black uppercase tracking-tight leading-tight mb-2 group-hover:text-old-gold transition-colors line-clamp-2 text-heavy-metal">
                    {post.title}
                  </h4>

                  {/* 1-2 Line Excerpt */}
                  <p className="text-heavy-metal/70 font-medium text-[11px] lg:text-[12px] leading-relaxed mb-3 line-clamp-1 sm:line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center gap-1.5 text-old-gold font-bold text-[9px] md:text-[10px] uppercase tracking-widest mt-auto group-hover:text-heavy-metal transition-colors">
                    Read Dispatch <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}